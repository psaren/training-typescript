/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let left = 0;
  let right = 0;
  let zeroCount = 0;
  let res = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }
    while (zeroCount > k) {
      if (nums[left++] === 0) {
        zeroCount--;
      }
    }
    res = Math.max(res, right - left + 1);
    right++;
  }
  return res;
};

nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2

console.log(longestOnes(nums, K))