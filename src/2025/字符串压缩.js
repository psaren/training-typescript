// 利用字符重复出现的次数，编写一种方法，实现基本的字符串压缩功能。比如，字符串aabcccccaaa会变为a2b1c5a3
const compress = (str) => {
  let cur = str[0];
  let num = 1;
  let result = '';
  for (let i = 1;i < str.length;i++) {
    if (str[i] === cur) {
      num++;
    } else {
      result += `${cur}${num}`;
      num = 1;
      cur = str[i];
    }
  }
  result += `${cur}${num}`;
  return result.length < str.length ? result : str;
};
console.log(compress('aabcccccaaa'));
