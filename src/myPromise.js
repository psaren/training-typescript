// 1、定义三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    // 2、定义五个变量
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallback = [];
    this.onRejectedCallback = [];

    // 3、定义 resolve/reject 方法
    const resolve = (value) => {
      setTimeout(() => { //加入 setTimeout 确保异步执行
        if (this.status === PENDING) {
          this.status = FULFILLED;
          this.value = value;
          this.onFulfilledCallback.forEach(fn => fn());
        }
      });
    };

    const reject = (reason) => {
      setTimeout(() => {
        if (this.status === PENDING) {
          this.status = REJECTED;
          this.reason = reason;
          this.onRejectedCallback.forEach(fn => fn());
        }
      });
    };
    // 4、try/catch 执行executor
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  // 5、实现 then/catch
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }

    if (this.status === PENDING) {
      this.onFulfilledCallback.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallback.push(() => {
        onRejected(this.reason);
      });
    }
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
  // 6、实现 race
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then(resolve, reject);
      })
    })
  }
  // 7、实现 all
  static all(promises) {
    let results = [];
    let count = 0;
  
    return new MyPromise((resolve, reject) => {
      promises.forEach(handler);
      function handler (res, index) {
        if (res instanceof MyPromise) {
          res.then(v => handler(v, index), reject);
        } else {
          results[i] = res;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        }
      }  
    });
  }
}