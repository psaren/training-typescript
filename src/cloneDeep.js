function cloneRegExp(regexp) {
  const reFlags = /\w*$/
  const result = new regexp.constructor(regexp.source, reFlags.exec(regexp))
  result.lastIndex = regexp.lastIndex
  return result
}

function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

function isReferenceType(obj) {
  const objType = typeof obj
  return obj !== null && (objType === 'object' || objType === 'function')
}

function cloneDeep(obj) {
  const cacheMap = new WeakMap()
  function cloneBase(entity) {
    if (!isReferenceType(entity)) {
      return entity
    }
    switch (getType(entity)) {
      case 'Array':
      case 'Object':
      case 'Map':
      case 'Set':
        return cloneReference(entity)
      case 'RegExp':
        return cloneRegExp(entity)
      default:
        return new entity.constructor(entity)
    }
  }
  function cloneReference(entity) {
    if (cacheMap.has(entity)) {
      return cacheMap.get(entity);
    }

    const c = new entity.constructor;

    cacheMap.set(entity, c);

    if (entity instanceof Map) {
      entity.forEach((value, key) => c.set(cloneBase(key), cloneBase(value)));
    }
    if (entity instanceof Set) {
      entity.forEach((value) => c.add(cloneBase(value)));
    }

    const keysWithSymbol = Object.keys(entity).concat(Object.getOwnPropertySymbols(entity))

    const objectOrArrayEntity = keysWithSymbol.map((prop) => ({
      [prop]: cloneBase(entity[prop])
    }))

    return Object.assign(c, ...objectOrArrayEntity);
  }
  return cloneBase(obj)
}

module.default = cloneDeep

/****** test ******/
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
  sym: Symbol()
}

a['self'] = a
console.log(`cloneDeep(a)`, cloneDeep(a))