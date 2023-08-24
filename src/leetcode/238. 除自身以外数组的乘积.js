/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//   let len = nums.length;
//   if (len === 0) return [];
//   let b = [1];
//   let temp = 1;
//   for (let i = 1; i < len; i++) {
//     b[i] = b[i - 1] * nums[i - 1];
//   }
//   //
//   for (let j = len - 2; j >= 0; j--) {
//     temp *= nums[j + 1];
//     b[j] *= temp;
//   }
//   return b;
// };

var productExceptSelf = function (nums) {
  let len = nums.length;
  if (len === 0) return [];
  const L = [1];
  const R = new Array(len);
  for (let i = 1; i <= len - 1; i++) {
    L[i] = L[i - 1] * nums[i - 1];
  }
  R[len - 1] = 1;
  for (let j = len - 2; j >= 0; j--) {
    R[j] = nums[j + 1] * R[j + 1];
  }
  return L.map((l, index) => l * R[index]);
};

/**
[1,2,3,4]
[1,2,3,4]
[1,2,3,4]
[1,2,3,4]
 */

console.log("productExceptSelf([1,2,3,4])", productExceptSelf([1, 2, 3, 4]));
