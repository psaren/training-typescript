/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let left = 0;
  let right = 0;
  let res = 0;
  let zeros = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      zeros++;
    }
    while (zeros > 1) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }
    res = Math.max(res, right - left);
    right++;
  }
  return res;
};

console.log(longestSubarray([1,1,0,1]))
console.log(longestSubarray([0,1,1,1,0,1,1,0,1]))
console.log(longestSubarray([1,1,1]))