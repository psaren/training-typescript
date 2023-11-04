// 例如：[10,21,0,-7,35,7,9,23,18] 输出5, 7最小
function getIndex(arr){
  let index=null;
  let min = 0;
  for (let  i = 0;i < arr.length;i++) {
    if (arr[i] > 0) {
      if (index === null) {
        index = i;
        min = arr[i];
        continue;
      }
      if (min > arr[i]) {
        index = i;
        min = arr[i];
      }
    }
  }
  return index;
}

console.log('first', getIndex([10,21,0,-7,35,7,9,23,18]))