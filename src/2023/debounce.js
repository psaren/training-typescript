function debounce (fn, timeout, immediate) {
  let timer = null;
  // immediateCall 标记是否立即执行过了
  let immediateCall = false;
  return function () {
    const context = this;
    const args = [...arguments];
    if (timer) clearTimeout(timer);
    if (immediate && !immediateCall) {
      fn.apply(context, args);
      immediateCall = true;
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