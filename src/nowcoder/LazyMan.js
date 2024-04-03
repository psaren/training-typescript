LazyMan('Tony');
// Hi I am Tony
console.log(LazyMan('Tony'))
LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food

function LazyMan(name) {
  return new LazyManClass(name);
}
class LazyManClass {
  constructor(name) {
    console.log(`Hi I am ${name}`);
    this.tasks = [];
    this.timer = null;
  }
  sleep(second) {
    this.tasks.push(() => new Promise((resolve) => setTimeout(() => {
      console.log(`等待了${second}秒...`);
      resolve();
    }, second * 1000)));
    return this;
  }
  sleepFirst(second) {
    this.tasks.unshift(() => new Promise((resolve) => setTimeout(() => {
      console.log(`等待了${second}秒...`);
      resolve();
    }, second * 1000)));
    this.consume();
    return this;
  }
  eat(str) {
    this.tasks.push(() => console.log(`I am eating ${str}`));
    this.consume();
    return this;
  }
  consume() {
    clearTimeout(this.timer);
    this.timer = setTimeout(async () => {
      for (const fn of this.tasks) {
        await fn();
      }
    }, 0);
  }
}
LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
