function deepClone(obj, cacheMap = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  // 处理 Date 对象
  if (obj instanceof Date) return new Date(obj);
  // 处理 RegExp 对象
  if (obj instanceof RegExp) return new RegExp(obj);

  // 处理循环引用
  if (cacheMap.has(obj)) return cacheMap.get(obj);

  const result = new obj.constructor();

  cacheMap.set(obj, result);

  if (obj instanceof Map) { // 处理 Map
    obj.forEach((value, key) => result.set(deepClone(key), deepClone(value)));
  } else if (obj instanceof Set) { // 处理 Set
    obj.forEach((value) => result.add(deepClone(value)));
  } else {
    const keys = Object.keys(obj);
    for (let k of keys) {
      if (obj.hasOwnProperty(key)) {
        result[k] = deepClone(obj[k], cacheMap);
      }
    }
  }

  return result;
}

var a = { n: 1};
a.b = a;
console.log(a)

console.log(deepClone(a));