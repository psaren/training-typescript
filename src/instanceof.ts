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

console.log(myInstanceof([1], Object));