/**
 * @param {Function} fn
 */
function memoize(fn) {
  const cacheMap = new Map();
  return function(...args) {
    const cacheKey = args.join('-');
    if (cacheMap.has(cacheKey)) {
      return cacheMap.get(cacheKey);
    }
    const result = fn.apply(null, args);
    cacheMap.set(cacheKey, result);
    return result;
  }
}


 
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
 callCount += 1;
  return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 
// const sum = (a, b) => a + b;

// const memoizedFn = memoize(sum);

// memoizedFn(1, 2);