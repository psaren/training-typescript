declare global {
  interface Function {
    myApply(...args: any[]): void;
  }
  interface Window { }
}

Function.prototype.myApply = function myApply(this: Function) {
  if (typeof this !== 'function') {
    throw new TypeError('当前调用myApply方法的不是函数！')
  }

  const args = [...arguments]
  const ctx = args[0] || globalThis
  const fn = Symbol('fn')
  ctx[fn] = this
  const result = ctx[fn](...(args[1] || []))
  delete ctx[fn]
  return result
}

export { }