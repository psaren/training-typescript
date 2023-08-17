const fullPermutate = (str: string): string[] => {
  const len = str.length;
  if (len === 1) return [str];
  const result: string[] = [];
  for (let i = 0;i < len;i++) {
    const cur = str[i];
    result.push(cur);
    const rest = str.slice(0, i) + str.slice(i+1, len);
    const restResult = fullPermutate(rest);
    for (let j = 0;j < restResult.length;j++) {
      result.push(cur + restResult[j]);
    }
  }
  return result;
};

const isPalindrome = (str: string): boolean => {
  const mid = Math.floor(str.length / 2);
  for (let i = 0;i <= mid;i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
};
// let result = fullPermutate('aab');
// result = result.filter(item => isPalindrome(item));
// console.log('result', result);