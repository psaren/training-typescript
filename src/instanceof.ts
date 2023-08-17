const myInstanceof = (target: any, origin: any): boolean => {
  const proto = target.__proto__;
  if (proto) {
    if (origin.prototype === proto) {
      return true;
    } else {
      return myInstanceof(proto, origin);
    }
  } else {
    return false;
  }
};
const customInstanceof = (left: any, right: any): boolean => {
  if (typeof left !== 'object' || left === null) {
    return false;
  }
  if (typeof right !== 'function') {
    throw new TypeError('Right-hand side must be a function');
  }
  const rightProto = right.prototype;
  let leftProto = Object.getPrototypeOf(left);
  while (true) {
    if (leftProto === null) {
      return false;
    }
    if (rightProto === leftProto) {
      return true;
    }
    leftProto = Object.getPrototypeOf(leftProto);
  }
}
console.log(myInstanceof([1], Object));
console.log(customInstanceof([1], Object));
