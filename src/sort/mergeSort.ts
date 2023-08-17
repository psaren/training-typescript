let sum = 0;
const mergeSort = (nums: number[]): number[] => {
  if (nums.length < 2) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  
  const merge = (left: number[], right: number[]) => {
    const result: number[] = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        result.push(left.shift()!);
      } else {
        sum++;
        result.push(right.shift()!);
      }
    }
    while (left.length > 0) {
      result.push(left.shift()!);
    }
    while (right.length > 0) {
      result.push(right.shift()!);
    }
    return result;
  };

  return merge(mergeSort(left), mergeSort(right));
}; 


console.log(mergeSort([7,3,2,6,0,1,5,4]));
console.log('sum', sum);