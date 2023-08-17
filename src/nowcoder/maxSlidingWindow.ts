// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
function maxSlidingWindow(nums: number[], k: number): number[] {
  const getMaxIndex = (nums: number[], start: number, k: number) => {
    let max = nums[start];
    let index = start;
    for (let i = start + 1;i < start + k;i++) {
      if (i >= nums.length) break;
      if (nums[i] > max) {
        max = nums[i];
        index = i;
      }
    }
    return index;
  };
  let maxIndex = getMaxIndex(nums, 0, k);
  const ans = [nums[maxIndex]];
  for (let i = 1;i <= nums.length - k;i++) {
    if (maxIndex < i) {
      maxIndex = getMaxIndex(nums, i, k);
    }
    if (nums[i + k - 1] > nums[maxIndex]) {
      maxIndex = i + k - 1;
    }
    ans.push(nums[maxIndex]);
  } 
  return ans;
};

const res = maxSlidingWindow([1], 1);

console.log('res', res)