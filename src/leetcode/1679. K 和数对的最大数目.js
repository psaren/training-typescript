/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  nums.sort((a, b) => a - b);
  let l = 0;
  let r = nums.length - 1;
  let ans = 0;
  while (l < r) {
    if (nums[l] + nums[r] === k) {
      ans++;
      l++;
      r--;
    } else if (nums[l] + nums[r] > k) {
      r--;
    } else {
      l++;
    }
  }
  return ans;
};

nums = [1,2,3,4], k = 5
console.log(maxOperations(nums, k))
nums = [3,1,3,4,3], k = 6
console.log(maxOperations(nums, k))