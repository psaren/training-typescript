// 自定义的取消信号类
class CancelSignal {
  constructor() {
    this.aborted = false;
    this.listeners = [];
  }

  addEventListener(event, listener) {
    if (event === 'abort') {
      this.listeners.push(listener);
    }
  }

  removeEventListener(event, listener) {
    if (event === 'abort') {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    }
  }

  // 触发取消事件
  trigger() {
    this.aborted = true;
    this.listeners.forEach(listener => {
      try {
        listener();
      } catch (error) {
        console.error('Error in cancel listener:', error);
      }
    });
  }
}

// 自定义的取消控制器类
class CancelController {
  constructor() {
    this.signal = new CancelSignal();
  }

  // 取消操作
  abort(reason) {
    if (!this.signal.aborted) {
      this.signal.trigger();
    }
  }

  // 检查是否已取消
  get aborted() {
    return this.signal.aborted;
  }

  // 创建可取消的Promise
  createCancellablePromise(promiseFactory) {
    return new Promise((resolve, reject) => {
      // 如果已经取消，立即拒绝
      if (this.aborted) {
        reject(new Error('Operation was cancelled'));
        return;
      }

      // 监听取消事件
      const abortHandler = () => {
        reject(new Error('Operation was cancelled'));
      };

      this.signal.addEventListener('abort', abortHandler);

      // 执行原始Promise
      Promise.resolve(promiseFactory())
        .then((result) => {
          this.signal.removeEventListener('abort', abortHandler);
          resolve(result);
        })
        .catch((error) => {
          this.signal.removeEventListener('abort', abortHandler);
          reject(error);
        });
    });
  }

  // 创建可取消的定时器
  createCancellableTimeout(callback, delay) {
    if (this.aborted) {
      return;
    }

    const timeoutId = setTimeout(() => {
      if (!this.aborted) {
        callback();
      }
    }, delay);

    // 监听取消事件，清除定时器
    const abortHandler = () => {
      clearTimeout(timeoutId);
    };

    this.signal.addEventListener('abort', abortHandler);

    // 返回清理函数
    return () => {
      clearTimeout(timeoutId);
      this.signal.removeEventListener('abort', abortHandler);
    };
  }

  // 创建可取消的间隔定时器
  createCancellableInterval(callback, interval) {
    if (this.aborted) {
      return;
    }

    const intervalId = setInterval(() => {
      if (!this.aborted) {
        callback();
      } else {
        clearInterval(intervalId);
      }
    }, interval);

    // 监听取消事件，清除定时器
    const abortHandler = () => {
      clearInterval(intervalId);
    };

    this.signal.addEventListener('abort', abortHandler);

    // 返回清理函数
    return () => {
      clearInterval(intervalId);
      this.signal.removeEventListener('abort', abortHandler);
    };
  }

  // 创建可取消的fetch请求
  createCancellableFetch(url, options = {}) {
    if (this.aborted) {
      return Promise.reject(new Error('Operation was cancelled'));
    }

    return new Promise((resolve, reject) => {
      const abortHandler = () => {
        reject(new Error('Fetch request was cancelled'));
      };

      this.signal.addEventListener('abort', abortHandler);

      fetch(url, options)
        .then((response) => {
          this.signal.removeEventListener('abort', abortHandler);
          resolve(response);
        })
        .catch((error) => {
          this.signal.removeEventListener('abort', abortHandler);
          reject(error);
        });
    });
  }

  // 创建可取消的事件监听器
  createCancellableEventListener(element, event, handler, options = {}) {
    if (this.aborted) {
      return;
    }

    element.addEventListener(event, handler, options);

    const abortHandler = () => {
      element.removeEventListener(event, handler, options);
    };

    this.signal.addEventListener('abort', abortHandler);

    // 返回清理函数
    return () => {
      element.removeEventListener(event, handler, options);
      this.signal.removeEventListener('abort', abortHandler);
    };
  }
}

// 使用示例
const cancelController = new CancelController();

// 示例1: 可取消的异步操作
const cancellablePromise = cancelController.createCancellablePromise(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Operation completed');
    }, 2000);
  });
});

cancellablePromise
  .then(result => console.log('Success:', result))
  .catch(error => console.log('Error:', error.message));

// 示例2: 可取消的定时器
const cleanupTimeout = cancelController.createCancellableTimeout(() => {
  console.log('Timeout executed');
}, 3000);

// 示例3: 可取消的间隔定时器
const cleanupInterval = cancelController.createCancellableInterval(() => {
  console.log('Interval executed');
}, 1000);

// 示例4: 可取消的事件监听器
// const cleanupEventListener = cancelController.createCancellableEventListener(
//   document,
//   'click',
//   () => console.log('Document clicked'),
//   { once: true }
// );

// 在1.5秒后取消所有操作
setTimeout(() => {
  console.log('Cancelling all operations...');
  cancelController.abort();
}, 1500);