/**
 * 泰波那契序列 Tn 定义如下： 
 *
 * T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n < 2) return n;
  if (n === 2) {
    return 1;
  }
  return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
};
var tribonacci2 = function(n) {
  if (n < 2) return n;
  if (n === 2) {
    return 1;
  }
  let T_n_1 = 0;
  let T_n_2 = 1;
  let T_n_3 = 1;
  for (let i = 3;i <= n;i++) {
    const sum = T_n_1 + T_n_2 + T_n_3;
    if (i === n) {
      return sum;
    } else {
      T_n_1 = T_n_2;
      T_n_2 = T_n_3;
      T_n_3 = sum;
    }
  }
};

console.log(tribonacci(10) === tribonacci2(10));