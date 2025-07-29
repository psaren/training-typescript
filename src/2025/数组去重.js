var arr = [
  {},
  {},
  233,
  233,
  '233',
  "abc",
  undefined,
  null,
  null,
  NaN,
  NaN,
  123,
  [2],
  [2],
  [2, 3],
];

Array.prototype.myUnique = function() {
  const result = [];
  const set = new Set();
  for (let i = 0;i < this.length;i++) {
    if (!result.includes(this[i])) {
      if (typeof this[i] === 'object') {
        const str = Array.isArray(this[i]) ? this[i].join(',') : Object.prototype.toString.call(this[i]);
        if (!set.has(str)) {
          result.push(this[i]);
          set.add(str);
        }
      } else {
        result.push(this[i]);
      }
    }
  }
  return result;
}
console.log(arr.myUnique());
