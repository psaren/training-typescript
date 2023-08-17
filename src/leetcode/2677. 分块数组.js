/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  const ans = [];
  if (arr.length === 0) return ans;
  let i = 0;
  while (i < arr.length) {
    let item = [];
    for (let j = 0;j < size;j++) {
      const num = arr[i++];
      if (num !== undefined) {
        item.push(num);
      }
    }
    ans.push(item);
  }
  return ans;
};

console.log('first', chunk([1,2,3,4,5], 8))
