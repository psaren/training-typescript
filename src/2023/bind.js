Function.prototype.myBind = function() {
  const slice = Array.prototype.slice
  const _this = this
  const args = slice.call(arguments)
  const that = args.shift();
  return function () {
    const arg = args.concat(slice.call(arguments))
    return _this.call(that, ...arg);
  }
}
