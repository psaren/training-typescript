const PENDING = 'PENDING';
const RESOLVED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  value: any;
  then: Function = () => {};
  
  constructor(executor: Function) {
    const tryCall = (callback: Function) => MyPromise.try(() => callback(this.value));
    const laterCalls: any[] = []
    const callLater = (getMember: Function) => {
      return (callback: Function) => {
        return new MyPromise((resolve: Function) => {
          laterCalls.push(() => resolve(getMember()(callback)))
        })
      }
    }
    const members = {
      [RESOLVED]: {
        state: RESOLVED,
        then: tryCall
      },
      [REJECTED]: {
        state: REJECTED,
        then: () => this,
      },
      [PENDING]: {
        state: PENDING,
        then: callLater(() => this.then)
      },
    }
    const changeState = (state: string) => Object.assign(this, members[state as keyof typeof members])
    const getCallback = (state: string) => (value: any) => {
      this.value = value;
      changeState(state);
      console.log(state, value);
      console.log('laterCalls', laterCalls)
    };
    const resolve = getCallback(RESOLVED);
    const reject = getCallback(REJECTED);
    changeState(PENDING)
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  static resolve(value: any) {
    return new MyPromise((resolve: Function) => resolve(value))
  }
  static reject(value: any) {
    return new MyPromise((_: unknown, reject: Function) => reject(value))
  }
  static try(callback: Function) {
    return new MyPromise((resolve: Function) => resolve(callback()));
}
}

const p = new MyPromise((resolve: any) => {
  setTimeout(() => {
    resolve(true)
  }, 1000)
});
p.then(console.log);