/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let avg = 0;
  let maxSum = 0;
  let sum = 0;
  const numsSize = nums.length;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  maxSum = sum;
  for (let i = k; i < numsSize; i++) {
    sum += nums[i] - nums[i - k];
    maxSum = sum > maxSum ? sum : maxSum;
  }
  avg = maxSum / k;
  return avg;
};

nums = [1,12,-5,-6,50,3], k = 4
console.log(findMaxAverage(nums, k))