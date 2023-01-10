const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0;i < arr.length;i++) {
    let compelete = true;
    for (let j = 0;j < arr.length - 1 - i;j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        compelete = false;
      }
    }
    if (compelete) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([2,1,3,6,5]));