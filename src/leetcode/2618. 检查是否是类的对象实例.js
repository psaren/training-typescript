/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  let proto = obj.__proto__;
  while (true) {
    if (proto == null) return false;
    if (proto == classFunction.prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
};

console.log(checkIfInstanceOf({}, Object));