function findPeakElement(nums) {
  // write code here
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) {
      return mid;
    } else if (nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

function findPeakElement(nums) {
  let ans = 0;
  for (let i = 1;i < nums.length;i++) {
    if (nums[i] > nums[i - 1]) {
      ans = i;
      if (i + 1 < nums.length && nums[i] > nums[i + 1]) {
        break;
      }
    } else if(nums[i] < nums[i - 1]) {
      break;
    }
  }
  return ans;
}


const res = findPeakElement([4,2,1,3,8,5]);
console.log('res', res);