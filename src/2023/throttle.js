function throttle (fn, delay = 500) {
  let start = Date.now();
  return (...args) => {
    let end = Date.now();
    if (end - start >= delay) {
      fn.apply(null, args);
      start = Date.now();
    } 
  }
}

const log = throttle(console.log);

setTimeout(() => log(1), 100)
setTimeout(() => log(1), 200)
setTimeout(() => log(1), 300)
setTimeout(() => log(1), 400)
setTimeout(() => log(1), 500)
setTimeout(() => log(1), 600)
setTimeout(() => log(1), 700)