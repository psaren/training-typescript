/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = {};
  let start = 0, ans = 0;

  for (let end = 0; end < s.length; end++) {
    if (s[end] in map) {
      start = Math.max(map[s[end]], start);
    }

    ans = Math.max(ans, end - start);
    map[s[end]] = end;
  }
  console.log('map', map)
  return ans;
};

console.log(lengthOfLongestSubstring("bbbbb"));
