/**
 * - 编写一个 basicThrottle 函数，接收 fn 和 delay 。
 * - 仅使用一个变量（比如 lastTime ）记录上一次执行的时间。
 * - 如果当前时间与 lastTime 的差值大于 delay ，则执行函数并更新 lastTime 。
 * - 不需要 处理定时器（即不考虑最后一次触发的延迟执行）。
 */
const basicThrottle = (fn, delay = 500) => {
  let lastTime = 0;

  return (context, ...args) => {
    const _context = context || globalThis;
    const call = () => {
      fn.apply(_context, args);
      lastTime = Date.now();
    };
    if (Date.now() - lastTime >= delay) {
      call();
    }
  }
}

// 综合版
/**
 * - 编写一个 throttle 函数，接收 fn 和 delay 。
 * - 仅使用一个变量（比如 lastTime ）记录上一次执行的时间。
 * - 如果当前时间与 lastTime 的差值大于 delay ，则执行函数并更新 lastTime 。
 * - 如果当前时间与 lastTime 的差值小于 delay ，则等待到时间到达后执行函数并更新 lastTime 。
 */
const throttle = (fn, delay) => {
  let lastTime = 0;
  let timer;
  return (context, ...args) => {
    const _context = context || globalThis;
    const call = () => {
      fn.apply(_context, args);
      lastTime = Date.now();
    };
    const now = Date.now();
    const remain = delay - (now - lastTime);
    clearTimeout(timer);
    if (remain <= 0) {
      call();
    } else {
      setTimeout(call, remain);
    }
  }
}