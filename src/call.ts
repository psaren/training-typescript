declare global {
  interface Function {
    myCall(...args: any[]): void;
  }
  interface Window { }
}

Function.prototype.myCall = function myCall(this: Function) {
  if (typeof this !== 'function') {
    throw new TypeError('当前调用myCall方法的不是函数！')
  }
  const args = [...arguments]
  const ctx = args.shift() || globalThis
  const fn = Symbol('fn')
  ctx[fn] = this
  const result = ctx[fn](...args)
  delete ctx[fn]
  return result
}

export { }