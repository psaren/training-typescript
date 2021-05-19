function cloneDeep(obj) {
  const cache = new WeakMap();
  function baseClone(entity) {

    const referenceTypes = ['Array', 'Object', 'Map', 'Set', 'WeakMap', 'WeakSet'];
    const entityType = Object.prototype.toString.call(entity);
    if (!new RegExp(referenceTypes.join('|')).test(entityType)) return entity;
    if (entity instanceof WeakMap || entity instanceof WeakSet) return entity;

    if (cache.has(entity)) {
      return cache.get(entity);
    }

    const c = new entity.constructor;

    cache.set(entity, c);

    if (entity instanceof Map) {
      entity.forEach((value, key) => c.set(baseClone(key), baseClone(value)));
    }
    if (entity instanceof Set) {
      entity.forEach((value) => c.add(baseClone(value)));
    }

    const objectOrArrayEntity = Object.keys(entity).map((prop) => ({
      [prop]: baseClone(entity[prop])
    }))

    return Object.assign(c, ...objectOrArrayEntity);
  }
  return baseClone(obj)
}

export default cloneDeep
