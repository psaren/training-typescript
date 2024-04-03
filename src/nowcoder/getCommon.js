// 给定两个数组，写一个方法来计算它们的交集。

// 例如：给定 nums1 = [1, 2, 2, 1]，nums2 = [2, 2]，返回 [2, 2]。

function intersect(nums1, nums2) {
  // 创建一个空数组来存储交集
  let result = [];
  
  // 创建一个对象来统计每个元素在nums1中的出现次数
  let count = {};
  for (let num of nums1) {
    count[num] = (count[num] || 0) + 1;
  }
  
  // 遍历nums2中的每个元素，如果在count对象中存在并且计数大于0，则将该元素添加到结果数组中，并将计数减1
  for (let num of nums2) {
    if (count[num] > 0) {
      result.push(num);
      count[num]--;
    }
  }
  
  return result;
}

// 测试方法
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log(intersect(nums1, nums2));  // 输出 [2, 2]
