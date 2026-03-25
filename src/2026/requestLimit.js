// 实现一个请求限制器，限制同时发送的请求数量
class RequestLimit {
  constructor(limit) {
    this.limit = limit;
    this.activeCount = 0;
    this.queue = [];
  }

  request (url, options) {
    return new Promise((resolve, reject) => {
      // 1. 将请求任务及其控制权存入队列
      this.queue.push({ url, options, resolve, reject });
      // 2. 尝试运行下一个任务
      this.runNext();
    });
  }

  runNext() {
    // 3. 检查并发限制和队列状态
    if (this.activeCount < this.limit && this.queue.length > 0) {
      const { url, options, resolve, reject } = this.queue.shift();
      this.activeCount++;
      
      // 4. 发起实际请求并连接结果
      fetch(url, options)
        .then(resolve) // 成功时 resolve 原始 Promise
        .catch(reject) // 失败时 reject 原始 Promise
        .finally(() => {
          this.activeCount--;
          this.runNext(); // 递归触发下一个排队任务
        });
    }
  }
}

export default RequestLimit;