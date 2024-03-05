const myNew = (fn, ...args) => {
  const newObj = Obejct.create(fn.prototype);
  const res = fn.call(...args);
  if (typeof res === 'object' && res !== null || typeof res === 'function') {
    return res;
  }
  return newObj;
};