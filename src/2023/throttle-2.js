function throttle (fn, delay = 500) {
  let called = false;

  return (...args) => {
    if (!called) {
      called = true;
      setTimeout(() => {
        fn.apply(null, args);
        called = false;
      }, delay);
    }
  }
}

const log = throttle(delayLog);

setTimeout(() => log(1), 100)
setTimeout(() => log(1), 200)
setTimeout(() => log(1), 300)
setTimeout(() => log(1), 400)
setTimeout(() => log(1), 500)
setTimeout(() => log(1), 600)
setTimeout(() => log(1), 700)
