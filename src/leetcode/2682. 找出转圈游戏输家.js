/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
  const s = new Set();
  let current = 1;
  let round = 1;
  while (true) {
    let newNum = getNum(current, n);
    if (s.has(newNum)) {
      break;
    }
    s.add(newNum);
    current = current + k * round++;
  }
  const ans = [];
  for (let i = 1;i <= n;i++) {
    if (!s.has(i)) ans.push(i);
  }
  return ans;
};
const getNum = (a, b) => {
  let res = a;
  while (res > b) {
    res = res - b;
  }
  return res;
}
n = 5;
k = 3;
// current = 1 + 3 * 1;
// current = 4 + 3 * 2;
;

console.log('===', circularGameLosers(n, k))