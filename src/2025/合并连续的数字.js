// 将以下数字合并为连续的范围：

// [1,2,3,4,6,7,9,13,15] => ['1->4', '6->7', '9', '13', '15']

const merge = (arr) => {
  let result = [];
  let start = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i-1] === 1) {
      continue;
    } else {
      result.push(start === arr[i-1] ? `${start}` : `${start}->${arr[i-1]}`);
      start = arr[i];
    }
  }
  if (start !== arr[arr.length-1]) {
    result.push(`${start}->${arr[arr.length-1]}`);
  } else {
    result.push(`${start}`);
  }
  return result;
};

console.log(merge([1,2,3,4,6,7,9,13,15]));