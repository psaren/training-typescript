/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const words = s.split(" ");
  let ans = '';
  for (let i = words.length - 1;i >= 0;i--) {
    const w = words[i];
    if (w) {
      ans += ans ==='' ? w : ` ${w}`;
    }
  }
  return ans;
};