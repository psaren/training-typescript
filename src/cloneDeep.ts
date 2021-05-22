function cloneRegExp(regexp: RegExp) {
  const reFlags = /\w*$/
  const result = new RegExp(regexp.source, reFlags.exec(regexp.toString())?.toString())
  result.lastIndex = regexp.lastIndex
  return result
}

function getType(obj: unknown) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

function isReferenceType(obj: unknown) {
  const objType = typeof obj
  return obj !== null && (objType === 'object' || objType === 'function')
}

function cloneDeep<T>(obj: T): T {
  const cacheMap = new WeakMap()
  function cloneBase(entity: any) {
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
    function cloneReference(entity: any) {
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

      const keysWithSymbol: Array<string | symbol> = [...Object.keys(entity), ...Object.getOwnPropertySymbols(entity)]

      const objectOrArrayEntity: unknown[] = keysWithSymbol.map((prop) => ({
        [prop]: cloneBase(entity[prop])
      }))

      return Object.assign(c, ...objectOrArrayEntity);
    }
  }
  return cloneBase(obj)
}

export default cloneDeep
