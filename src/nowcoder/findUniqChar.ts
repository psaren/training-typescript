function firstUniqChar(s: string): number {
  let ans = -1;
  const map = new Map<string, number>();
  const cache: Record<string, boolean> = {};
  for (let i = 0;i < s.length;i++) {
    if (map.has(s[i])) {
      map.delete(s[i]);
      cache[s[i]] = true;
    } else if (!cache[s[i]]) {
      map.set(s[i], i);
    }
  }
  if (map.size) {
    const entries = map.entries();
    const x = entries.next().value;
    return x[1];
  }
  
  return ans;
};

console.log('firstUniqChar', firstUniqChar('aabbcdd'))