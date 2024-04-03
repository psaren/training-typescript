const { isArrayLiteralExpression } = require("typescript");

// 使用迭代的方式实现 flatten
const flatten = (arr) => {
  const stack = [...arr];
  const result = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.unshift(next);
    }
  }
  return result;
};

// 使用递归的方式实现 flatten
const flatten_recurse = (arr) => {
  const result = [];
  for (let n of arr) {
    if (Array.isArray(n)) {
      result.push(...flatten_recurse(n));
    } else {
      result.push(n);
    }
  }
  return result;
};

const arr = [1,2,[5,4,3,[9,6]],8,7];
console.log(flatten(arr));
console.log(flatten_recurse(arr));