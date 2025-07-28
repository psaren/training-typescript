function throttle (fn, delay = 500) {
  let timer = null;
  let start = Date.now();
  return (...args) => {
    let end = Date.now();
    let remain = delay - (end - start);
    clearTimeout(timer);
    if (remain <= 0) {
      fn.apply(null, args);
      start = Date.now();
    } else {
      timer = setTimeout(() => {
        fn.apply(null, args);
        start = Date.now();
      }, remain);
    }
  }
}