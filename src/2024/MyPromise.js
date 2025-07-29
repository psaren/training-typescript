class MyPromise {
  // 实现constructor，定义5个变量（2个是回调数组）
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.error = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    // 定义 resolve
    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(cb => cb());
      }
    };
    // 定义 reject
    const reject = (error) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.error = error;
        this.onRejectedCallbacks.forEach(cb => cb());
      }
    };
    // 执行executor
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  // 定义then,确保onFulfilled, onRejected都为函数
  then(onFulfilled, onRejected) {
    onFulfilled = onFulfilled || (value => value);
    onRejected = onRejected || (error => { throw error; });

    const promise2 = new MyPromise((resolve, reject) => {
      // 处理 fulfilled 状态
      if (this.state === 'fulfilled') {
        try {
          const result = onFulfilled(this.value);
          resolvePromise(promise2, result, resolve, reject);
        } catch (error) {
          reject(error);
        }
      // 处理 rejected 状态
      } else if (this.state === 'rejected') { 
        try {
          const result = onRejected(this.error);
          resolvePromise(promise2, result, resolve, reject);
        } catch (error) {
          reject(error);
        }
      // 处理 pending 状态,保存回调数组到
      } else {
        this.onFulfilledCallbacks.push(() => {
          try {
            const result = onFulfilled(this.value);
            resolvePromise(promise2, result, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
        this.onRejectedCallbacks.push(() => {
          try {
            const result = onRejected(this.error);
            resolvePromise(promise2, result, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
    });

    return promise2;
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
}

// 辅助函数，用于处理 then 方法中的 resolve 逻辑
function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    throw new TypeError('Chaining cycle detected for promise');
  }

  let called = false; // 保证回调函数只被调用一次
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then;
      if (x instanceof MyPromise) {
        then = x.then.bind(x);
      } else {
        then = x.then;
      }
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return;
          called = true;
          resolvePromise(promise, y, resolve, reject);
        }, r => {
          if (called) return;
          called = true;
          reject(r);
        });
      } else {
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    resolve(x);
  }
}

// 使用示例
function asyncOperation() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('操作成功');
    }, 1000);
  });
}

asyncOperation()
  .then(result => {
    console.log(result); // 操作成功
  })
  .catch(error => {
    console.error(error);
  });