// 写一个带并发限制的异步调度器
class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.activeCount = 0;
  }
  add(task, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error('Task timeout'));
      }, timeout);
      const wrapedTask = () => task().finally(() => clearTimeout(timer));
      this.queue.push({ task: wrapedTask, resolve, reject });
      this.run();
    })
  }
  run() {
    while (this.queue.length > 0 && this.activeCount < this.limit) {
      const {task, resolve, reject} = this.queue.shift();
      this.activeCount++;
      task().then(resolve).catch(reject).finally(() => {
        this.activeCount--;
        this.run();
      })
    }
  }
}

const scheduler = new Scheduler(2);

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time);
});

const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => {
    console.log(order);
  });
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

// 优先级
export class PriorityScheduler extends Scheduler {
  add(task, priority = 0) {
    return new Promise((resolve, reject) => {
      const item = { task, resolve, reject, priority };
      const index = this.queue.findIndex(i => i.priority < priority);
      if (index === -1) {
        this.queue.push(item);
      } else {
        this.queue.splice(index, 0, item);
      }
      this.run();
    })
  }
}