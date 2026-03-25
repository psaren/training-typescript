class Emitter {
  constructor(max) {
    this.max = max;
    this.syncIdx = 0;
    this.asyncIdx = 0;
  }
  *[Symbol.iterator]() {
    while (this.syncIdx < this.max) {
      yield this.syncIdx++;
    }
  }
  async *[Symbol.asyncIterator]() {
    while (this.asyncIdx < this.max) {
      yield new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.asyncIdx++);
        }, Math.floor(Math.random() * 1000));
      });
    }
  }
}
const emitter = new Emitter(5);
function syncCount() {
  const syncCounter = emitter[Symbol.iterator]();
  for (const x of syncCounter) {
    console.log(x);
  }
}
async function asyncCount() {
  const asyncCounter = emitter[Symbol.asyncIterator]();
  for await (const x of asyncCounter) {
    console.log(x);
  }
}
asyncCount();