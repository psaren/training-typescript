const fullPermutate = (str: string): string[] => {
  const len =  str.length;
  if (len === 1) return [str];
  const result: string[] = [];
  for (let i = 0;i < len;i++) {
    const cur = str[i];
    result.push(cur);
    const rest = str.slice(0, i) + str.slice(i + 1, len);
    const restResult = fullPermutate(rest);
    for (let j = 0;j < restResult.length;j++) {
      result.push(cur + restResult[j]);
    }
  }
  return result;
}
console.log(fullPermutate('abc'))