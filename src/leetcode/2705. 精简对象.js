/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
  const isObject = (o) => typeof o === "object" && o !== null;
  if (isObject(obj)) {
    if (Array.isArray(obj)) {
      const res = [];
      for (let item of obj) {
        if (isObject(item)) {
          res.push(compactObject(item));
        } else if (Boolean(item)) {
          res.push(item);
        }
      }
      return res;
    } else {
      const k = Object.keys(obj);
      const res = {};
      for (let i of k) {
        if (isObject(obj[i])) {
          res[i] = compactObject(obj[i]);
        } else if (Boolean(obj[i])) {
          res[i] = obj[i];
        }
      }
      return res;
    }
  }
};

console.log(compactObject([null, 0, false, 1]));
console.log(compactObject({ a: null, b: [false, 1] }));
console.log(compactObject([null, 0, 5, [0], [false, 16]]));
