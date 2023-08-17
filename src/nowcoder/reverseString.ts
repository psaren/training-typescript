/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const len = s.length;
  const mid = Math.floor(len / 2);
  for (let i = 0;i <= mid;i++) {
    const temp = s[i];
    s[i] = s[len - i - 1];
    s[len - i - 1] = temp;
  }
};
const s = ['a','b','c','d', 'e'];
reverseString(s);
console.log('reverseString', s);