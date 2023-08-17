function intersect(nums1: number[], nums2: number[]): number[] {
  const ans: number[] = [];
  const indexSet = new Set();
  for (const n of nums1) {
    for (let i = 0;i < nums2.length;i++) {
      if (!indexSet.has(i) && nums2[i] === n) {
        indexSet.add(i);
        ans.push(n);
        break;
      }
    }
  }
  return ans;
};

console.log('first', intersect(
  [4,9,5],
  [9,4,9,8,4]
))