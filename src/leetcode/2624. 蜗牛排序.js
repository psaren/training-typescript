/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  const result = [];
  if (rowsCount * colsCount !== this.length) return result;
  const len = this.length;
  let index = 0;
  for (let r = 0;r < rowsCount;r++) {
    if (!Array.isArray(result[r])) {
      result.push([]);
    }
  }
  for (let c = 0;c < colsCount;c++) {
    for (let r = 0;r < rowsCount;r++) {
      result[c % 2 === 0 ? r : rowsCount -r - 1][c] = this[index];
      index++;
    }
  }
  return result;
}

// 输入：
// nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
// rowsCount = 5
// colsCount = 4
// 输出：
// [
//  [19,17,16,15],
//  [10,1,14,4],
//  [3,2,12,20],
//  [7,5,18,11],
//  [9,8,6,13]
// ]

const nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]

console.log(nums.snail(5, 4))