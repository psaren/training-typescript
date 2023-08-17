/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  const child1 = getValidChild(str1);
  const child2 = getValidChild(str2);
  console.log('child1', child1)
  console.log('child2', child2)
  while (child1.length) {
    const str = child1.pop();
    if (child2.includes(str)) {
      return str;
    }
  }
  return '';
};

/**
 * @param {string} str
 * @return {string[]}
 */
var getValidChild = (str) => {
  const ans = [''];
  for (let i = 1;i <= str.length;i++) {
    const n = str.length % (i - 0);
    const s = str.slice(0, i);
    if (n === 0 && s.repeat(str.length / (i - 0)) === str) {
      ans.push(s);
    }
  }
  return ans;
}

console.log(gcdOfStrings('ABCABC', 'ABC'))
console.log(gcdOfStrings('ABAB', 'AB'))
console.log(gcdOfStrings('LEET', 'CODE'))