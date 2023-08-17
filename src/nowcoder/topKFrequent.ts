function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (let n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n)! + 1)
    } else {
      map.set(n, 1);
    }
  }
  const arr = [...map.entries()];
  arr.sort((a, b) => b[1] - a[1]);
  return arr.slice(0, k).map(([n]) => n);
};

const res = topKFrequent([1,1,1,3,3,2,2], 2);
console.log('res', res);