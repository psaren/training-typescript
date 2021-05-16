function throttle<F extends ((...args: unknown[]) => void)>(fn: F, threshhold: number) {
  let last: number
  let timer: NodeJS.Timeout | null

  return function (this: any, ...args: Parameters<F>) {
    const now = Date.now()
    const _this = this

    if (last && now < last + threshhold) {
      if (timer) {
        globalThis.clearTimeout(timer)
        timer = null
      }

      timer = globalThis.setTimeout(() => {
        last = Date.now()
        fn.apply(_this, args)
      }, threshhold)
    } else {
      last = now
      fn.apply(_this, args)
    }
  }
}