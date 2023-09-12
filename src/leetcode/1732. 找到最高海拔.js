/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0;
  let pre = 0;
  for (let i of gain) {
    max = Math.max(max, i + pre);
    pre = i + pre;
  }
  return max;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
