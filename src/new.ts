function myNew(fn: Function, ...args: unknown[]) {
  const newObj = Object.create(fn.prototype);
  const res = fn.apply(newObj, args)
  const isFunction = typeof res === 'function'
  const isObject = typeof res === 'object' && res !== null
  if (isFunction || isObject) {
    return res
  }
  return newObj
}