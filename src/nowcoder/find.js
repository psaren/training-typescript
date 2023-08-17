/*
[
[1,2,8,9],
[2,4,9,12],
[4,7,10,13],
[6,8,11,15]
]
*/
function Find(target, array) {
  const row = array.length;
  if (row === 0) return false;
  const col = array[0].length;
  let r = row - 1;
  let c = 0;
  while (r >= 0 && c < col) {
    if (target > array[r][c]) {
      c++;
      continue;
    } else if (target < array[r][c]) {
      r--;
      continue;
    } else {
      return true;
    }
  }
  return false;
}
const res = Find(1, [
  [1,2,8,9],
  [2,4,9,12],
  [4,7,10,13],
  [6,8,11,15]
]);
console.log('res', res);