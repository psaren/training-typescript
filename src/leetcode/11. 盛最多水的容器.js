/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    max = Math.max(area, max);
    if (height[l] >= height[r]) {
      r--;
    } else {
      l++;
    }
  }
  return max;
};

height = [1,8,6,2,5,4,8,3,7]

console.log(maxArea(height))