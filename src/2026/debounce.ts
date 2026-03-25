const debounce = (fn: (...args: any[]) => void, wait: number, immediate: boolean) => {
  let timer: NodeJS.Timeout | null;
  let result:unknown;
  return function(context: any, ...args: Parameters<typeof fn>) {
    const _context = context || globalThis;
    const later = () => {
      timer = null;
      result = fn.apply(_context, args);
    };
    const callNow = immediate && !timer;
    
    if (callNow) {
      result = fn.apply(_context, args);
    }
    
    timer && clearTimeout(timer);
    timer = setTimeout(later, wait);
    return result;
  }
}