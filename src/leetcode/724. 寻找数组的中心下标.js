/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  if (sum - nums[0] === 0) return 0;
  if (sum - nums[nums.length - 1] === 0) return nums.length - 1;
  let leftSum = 0;
  for (let i = 1;i < nums.length;i++) {
    leftSum += nums[i-1];
    if (leftSum * 2 + nums[i] === sum) {
      return i;
    }
  }
  return -1;
};

nums = [1, 7, 3, 6, 5, 6];

console.log(pivotIndex(nums))
nums = [1, 2, 3];

console.log(pivotIndex(nums))

nums = [2, 1, -1];

console.log(pivotIndex(nums))
