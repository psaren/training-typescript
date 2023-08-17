function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = new Map<string, number>();
  for (let i = 0;i < s.length;i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i])! + 1);
    } else {
      map.set(s[i], 1);
    }
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i])! - 1);
    } else {
      map.set(t[i], -1);
    }
  }
  for (let n of map.values()) {
    if (n !== 0) return false;
  }
  return true;
};

console.log('isAnagram', isAnagram('rat', 'car'))