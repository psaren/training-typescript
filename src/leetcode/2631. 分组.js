/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  const result = {};
  for (let item of this) {
    const key = fn(item);
    if (Array.isArray(result[key])) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
  }
  return result;
};