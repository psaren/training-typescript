function clone(obj, map = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  function cloneObj(obj) {
    const c = new obj.constructor;

    if (map.has(obj)) return map.get(obj);
    map.set(obj, c);

    if (obj instanceof Map) {
      obj.forEach((v, k) => c.set(clone(k, map), clone(v, map)));
    } else if (obj instanceof Set) {
      obj.forEach(v => c.add(clone(v, map)));
    } else {
      const keys = Object.keys(obj);
      const symbolKeys = Object.getOwnPropertySymbols(obj);
      [...keys, ...symbolKeys].forEach((k) => {
        c[k] = clone(obj[k], map);
      });
    }
    return c;
  }
  return cloneObj(obj);
}

console.log(clone(1));
console.log(clone('1'));
console.log(clone(null));
console.log(clone(true));
console.log(clone(undefined));
console.log(clone(Symbol('a')));

console.log(clone(new Map()))
console.log(clone(new Set([1,2,4])))
console.log(clone([1,2,4]))
console.log(clone({ a: '1' }))

a = {}
a.b = 'b'
a.c = a
a[Symbol('s')] = 'hello'

console.log(clone(a));
