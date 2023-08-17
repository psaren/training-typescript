/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  arr1.sort((a, b) => a.id - b.id);
  arr2.sort((a, b) => a.id - b.id);
  let i1 = 0;
  let i2 = 0;
  let currentId = Math.min(arr1[i1].id, arr2[i2].id);
  const ans = [];
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1].id === arr2[i2].id) {
      ans.push(Object.assign(arr1[i1], arr2[i2]));
      i1++;
      i2++;
    } else if (arr1[i1].id < arr2[i2].id) {
      ans.push(arr1[i1]);
      i1++;
    } else {
      ans.push(arr2[i2]);
      i2++;
    }
  }
  if (i1 < arr1.length) {
    for (let i = i1;i < arr1.length;i++) {
      ans.push(arr1[i]);
    }
  }
  if (i2 < arr2.length) {
    for (let i = i2;i < arr2.length;i++) {
      ans.push(arr2[i]);
    }
  }
  return ans;
};

/*
输入：
arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]
输出： [
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
]
解释：具有 id 为 1 的对象合并在一起。对于键 "b" 和 "v" ，使用 arr2 中的值。由于键 "y" 只存在于 arr1 中，因此取 arr1 的值。
*/

arr1 = [{"id":1,"p":24,"z":51,"b":36},{"id":2,"u":93,"q":94,"e":66},{"id":3,"g":2,"d":76,"c":23},{"id":4,"g":41,"n":92}]
arr2 = [{"id":1,"q":88,"l":73}]
arr3 = join(arr1, arr2);
result = [{"b":36,"id":1,"l":73,"p":24,"q":88,"z":51},{"e":66,"id":2,"q":94,"u":93},{"c":23,"d":76,"g":2,"id":3},{"g":41,"id":4,"n":92}]
// console.log('arr1', arr1)
// console.log('arr2', arr2)
console.log('arr3', arr3)