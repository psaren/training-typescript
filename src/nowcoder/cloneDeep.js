const isObject = o => o != null && (typeof o === "object" || typeof o === 'function');
function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}
const clone = (obj) => {
  const map = new WeakMap();
  const cloneObj = (o) => {
    if (!isObject(o)) return o;
    const iterObj = ['Object', 'Array', 'Set', 'Map'];
    if (!iterObj.includes(getType(o))) {
      return new o.constructor(o);
    }
    if (map.has(o)) {
      return map.get(o);
    }
    const c = new o.constructor;
    map.set(o, c);
    if (c instanceof Set) {
      o.forEach((item => c.add(cloneObj(item))));
    }
    if (c instanceof Map) {
      o.forEach((v, k) => c.set(cloneObj(k), cloneObj(v)));
    }
    const keysWithSymbol = Object.keys(o).concat(Object.getOwnPropertySymbols(o));
    const objectOrArray = keysWithSymbol.map(prop => ({
      [prop]: cloneObj(o[prop]),
    }))
    return Object.assign(c, ...objectOrArray);
  };
  return cloneObj(obj);
};

const s = Symbol('s')
const a = {
  num: 1,
  str: 'string',
  [s]: 'symbol',
  map: new Map(),
  set: new Set(),
  boolean: true,
  reg: /hello/gim,
  func: function a() { },
  und: undefined,
  null: null,
  sym: Symbol(),
  date: new Date()
}

a['self'] = a
console.log(`clone(a)`, clone(a))