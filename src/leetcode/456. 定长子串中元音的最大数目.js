/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  let ans = 0;
  let cur = 0;
  let vowels = 'aeiou';
  for (let i = 0;i < k;i++) {
    if (vowels.includes(s[i])) {
      cur++;
    }
  }
  ans = Math.max(ans, cur);
  for (let j = k;j < s.length;j++) {
    if (vowels.includes(s[j])) {
      cur++;
    }
    if (vowels.includes(s[j - k])) {
      cur--;
    }
    ans = Math.max(ans, cur);
  }
  return ans;
};

s = "aeiou"
k = 2
console.log('maxVowels(s, k)', maxVowels(s, k))