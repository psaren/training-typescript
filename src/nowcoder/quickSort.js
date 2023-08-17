function quickSort(nums) {
  if (nums.length < 2) return nums;
  const num = nums[0];
  const left = [];
  const right = [];
  for (let i = 1;i < nums.length;i++) {
    if (nums[i] < num) left.push(nums[i]);
    else right.push(nums[i]);
  }

  return quickSort(left).concat([num], quickSort(right))
}

console.log(quickSort([3,2,1,5,6]))