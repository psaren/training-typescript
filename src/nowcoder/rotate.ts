function rotate(nums: number[], k: number): void {
  const len = nums.length;
  k = k % len;
  for (let i = 0;i < k;i++) {
    const last = nums.pop();
    nums.unshift(last!);
  }
};
const nums = [1,2];
rotate(nums, 2);
console.log('nums', nums);