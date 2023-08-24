/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//   nums.sort((a, b) => {
//     if (a === 0) return 1;
//     if (b === 0) return -1;
//     else return 0;
//   });
// };

var moveZeroes = function(nums) {
  var i = 0;
  var j = 0;
  var n = nums.length;
  while(j < n) {
      if(nums[j] != 0) {
          nums[i++] = nums[j]
      }
      j++;
  }
  for(var k = i + 1; k < n;k++) {
      nums[k] = 0
  }
};

nums = [0,1,0,3,12]

moveZeroes(nums);

// console.log('nums', nums)