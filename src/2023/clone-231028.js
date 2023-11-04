// 判断是否为引用类型
function isReferenceType(obj) {
  const objType = typeof obj
  return obj !== null && (objType === 'object' || objType === 'function')
}

function cloneDeep(obj) {
  const cacheMap = new WeakMap();
  function cloneBase(entity) {
    if (!isReferenceType(entity)) {
      return entity;
    }
    if (cacheMap.has(entity)) {
      return cacheMap.get(entity);
    }
    const c = new entity.constructor;
    cacheMap.set(entity, c);
    const keys = Object.keys(entity).concat(Object.getOwnPropertySymbols(entity));
    for (let k of keys) {
      c[k] = cloneBase(entity[k]);
    }
    return c;
  }
  return cloneBase(obj);
}

const s = Symbol('s');
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
  sym: Symbol()
}

a['self'] = a

console.log('first', cloneDeep(a));