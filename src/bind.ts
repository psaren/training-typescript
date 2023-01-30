declare global {
  interface Function {
    myBind(...args: any[]): () => void
  }
  interface Window { }
}

Function.prototype.myBind = function myBind() {
  if (typeof this !== 'function') {
    throw new TypeError('当前调用myBind方法的不是函数！')
  }
  const slice = Array.prototype.slice
  const _this = this
  const args = slice.call(arguments)
  const that = args.shift()
  return function () {
    const funcArgs = args.concat(slice.call(arguments))
    return _this.call(that, ...funcArgs)
  }
}

export { }