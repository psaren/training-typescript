const isObject = o => typeof o === 'object' && o !== null;
const isFunction = o => typeof o === 'function';

const cloneDeep = (obj) => {
  // 使用 WeakMap 来处理循环引用
  const cacheMap = new WeakMap();

  // 深拷贝基本函数
  const cloneBase = (o) => {
    if (isObject(o) || isFunction(o)) {
      if (o instanceof Date) return new Date(o);
      if (o instanceof RegExp) return new RegExp(o);
      return cloneReference(o);
    }
    return o;
  };

  // 深拷贝引用类型函数
  const cloneReference = (o) => {
    if (cacheMap.has(o)) {
      return cacheMap.get(o);
    }
    const c = new o.constructor();
    
    cacheMap.set(o, c);

    // 处理 Map 类型
    if (o instanceof Map) {
      o.forEach((value, key) => c.set(cloneBase(key), cloneBase(value)));
    }

    // 处理 Set 类型
    if (o instanceof Set) {
      o.forEach((value) => c.add(cloneBase(value)));
    }

    // 获取对象的所有属性，包括 Symbol 类型
    const keys = Object.keys(o).concat(Object.getOwnPropertySymbols(o));

    // 对每个属性进行深拷贝
    keys.forEach((k) => {
      c[k] = cloneBase(o[k]);
    });
    return c;
  };

  // 深拷贝包括原型链的函数
  const cloneWithPrototype = (o) => {
    const clonedObj = cloneBase(o);
    const prototype = Object.getPrototypeOf(o);
    if (prototype) {
      const clonedPrototype = cloneWithPrototype(prototype);
      Object.setPrototypeOf(clonedObj, clonedPrototype);
    }
    return clonedObj;
  };

  return cloneWithPrototype(obj);
};