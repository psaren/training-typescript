/**
 * @param {character[]} chars
 * @return {number}
 */
// var compress = function(chars) {
//   let s = '';
//   let lastIndex = 0;
//   const ans = [];
//   for (let i = 0;i < chars.length;i++) {
//     if (!s) {
//       s = chars[i];
//     } else if (s !== chars[i]) {
//       const count = i - lastIndex;
//       ans.push(s);
//       if (count > 1) {
//         ans.push(...`${count}`.split(''));
//       }
//       s = chars[i];
//       lastIndex = i;
//     }
//   }
//   const lastCharCount = chars.length - lastIndex;
//   if (lastCharCount > 0) {
//     ans.push(s);
//     if (lastCharCount > 1) {
//       ans.push(...`${lastCharCount}`.split(''));
//     }
//   }
//   for (let i = 0;i < ans.length;i++) {
//     chars[i] = ans[i];
//   }
//   return ans.length;
// };
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let s = '';
  let lastIndex = 0;
  let num = 0;
  for (let i = 0;i <= chars.length;i++) {
    if (!s) {
      s = chars[i];
    } else if (s !== chars[i] || i === chars.length) {
      const count = i - lastIndex;
      chars[num++] = s;
      if (count > 1) {
        let str = `${count}`.split('');
        for (let j = 0;j < str.length;j++) {
          chars[num+j] = str[j];
        }
        num += str.length;
      }
      s = chars[i];
      lastIndex = i;
    }
  }

  return num;
};

chars = ["a","a","b","b","c","c","c"]
console.log('result', compress(chars))
chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
console.log('result', compress(chars))