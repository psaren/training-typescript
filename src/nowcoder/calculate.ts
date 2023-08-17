function calculate(s: string): number {
  if (!s) return 0;
  let stack: number[] = [];
  let sNum = 0;
  let oparetor = '+';
  for (let i = 0, len = s.length;i <= len;i++) {
    if (s[i] === ' ') continue;
    if (/[0-9]/.test(s[i])) {
      sNum = sNum * 10 + parseInt(s[i], 10);
      continue;
    }
    switch(oparetor) {
      case '+':
        stack.push(sNum);
        break;
      case '-':
        stack.push(-1 * sNum);
        break;
      case '*':
        const last = stack.pop();
        const multiValue = last! * sNum;
        stack.push(multiValue);
        break;
      case '/':
        const preNum = stack.pop();
        const result = preNum! / sNum;
        if (result < 0) {
          stack.push(Math.ceil(result));
        } else {
          stack.push(Math.floor(result));
        }
        break;
      default:
        break;
    }
    sNum = 0;
    oparetor = s[i];
  }
  return stack.reduce((a, b) => a + b, 0);
};

console.log('calculate', calculate(" 3/2 "))