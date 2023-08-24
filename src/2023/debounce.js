function debounce (fn, timeout, immediate) {
  let timer = null;
  return function () {
    const context = this;
    const args = [...arguments];
    if (timer) clearTimeout(timer);
    if (immediate) {
      const callNow = !timeout;
      timer = setTimeout(function () {
        timer = null;
        }, wait)
      if (callNow) {
        fn.apply(context, args);
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, timeout);
    }
  }
}

const log = debounce(console.log, 98);

setTimeout(() => log(1), 100)
setTimeout(() => log(1), 200)
setTimeout(() => log(1), 300)
setTimeout(() => log(1), 400)
setTimeout(() => log(1), 500)
setTimeout(() => log(1), 600)
setTimeout(() => log(1), 700)