/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let index = 0;
  for (let i = 0;i < s.length;i++) {
    const pos = t.indexOf(s[i], index);
    if (pos >= 0) {
      index = pos;
    } else {
      return false;
    }
  }
  return true;
};