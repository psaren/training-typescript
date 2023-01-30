function debounce<F extends ((...args: any[]) => void)>(fn: F, wait: number, immediate?: boolean) {
  let timer: NodeJS.Timeout | null
  let result: unknown
  return function (context: any, ...args: Parameters<F>) {
    const _this = context || globalThis
    const later = () => {
      timer = null
      if (!immediate) result = fn.apply(_this, args)
    }
    const callNow = immediate && !timer
    timer = globalThis.setTimeout(later, wait)
    if (callNow) result = fn.apply(_this, args);
    return result
  }
}


export default debounce
