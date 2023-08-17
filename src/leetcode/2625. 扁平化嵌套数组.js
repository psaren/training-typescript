/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  const func = (arr, n, depth = 0) => {
    const result = [];
    for (const item of arr) {
      if (Array.isArray(item)) {
        console.log('n', n, depth);
        if (n <= depth) {
          result.push(item);
        } else {
          result.push(...func(item, n, depth + 1));
        }
      } else {
        result.push(item);
      }
    }
    return result;
  }
  return func(arr, n);
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

console.log(flat(arr, 0))