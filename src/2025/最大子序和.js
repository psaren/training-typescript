/**
给定一个整数数组 nums，要求找出一个连续子数组，使其和最大（子数组至少包含一个元素），并返回该最大和。

子数组指的是数组中的一个连续片段。

示例 1：
输入： nums = [-2,1,-3,4,-1,2,1,-5,4]
输出： 6
解释： 连续子数组 [4,-1,2,1] 的和为 6，最大。

示例 2：
输入： nums = [1]
输出： 1

示例 3：
输入： nums = [5,4,-1,7,8]
输出： 23
 */

const maxSubArray = (nums) => {
  let max = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    max = Math.max(max, sum);
  }
  return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));