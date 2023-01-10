const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;
  const mid = arr[0];
  let left = [];
  let right = [];
  for (let i = 1;i < arr.length;i++) {
    if (arr[i] < mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([mid], quickSort(right))
};

console.log(quickSort([2,1,3,6,5]));