Function.prototype.myApply = function(context, args) {
  const ctx = context || globalThis;
  const fn = Symbol('fn');
  ctx[fn] = this;
  const result = ctx[fn](...args);
  delete ctx[fn];
  return result;
}
Function.prototype.myCall = function(context, ...args) {
  const ctx = context || globalThis;
  const fn = Symbol('fn');
  ctx[fn] = this;
  const result = ctx[fn](...args);
  delete ctx[fn];
  return result;
}
Function.prototype.myBind = function(context, ...args) {
  const ctx = context || globalThis;
  const fn = Symbol('fn');
  ctx[fn] = this;
  return function(...args2) {
    const result = ctx[fn](...args, ...args2);
    delete ctx[fn];
    return result;
  }
}
function min (a, b) {
  return a > b ? b : a;
}

const debounce = function (fn, wait, immdiate = false) {
  const _this = this;
  let result;
  return (...args) => {
    let timer = null;
    if (timer) {
      timer = null;
      return clearTimeout(timer);
    }
    const callNow = immdiate && !timer;
    const later = () => {
      result = fn.apply(_this, args);
    }
    
    if (callNow) {
      later();
    } else {
      timer = setTimeout(later, wait);
    }
    return result;
  }
};