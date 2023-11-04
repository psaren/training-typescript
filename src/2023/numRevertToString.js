// 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。
// 要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
function numRevertToString(num) {
  if (num > 9) {
    const nextNum = Math.floor(num / 10);
    const current = num - nextNum * 10;
    return `${current}` + numRevertToString(nextNum);
  }
  return num.toString();
}

console.log('numRevertToString', numRevertToString(56784))