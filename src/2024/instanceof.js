const isInstanceof = (obj, target) => {
  if (typeof obj !== 'object' || obj === null) return false;
  let proto = Object.getPrototypeOf(obj);
  while (proto) {
    if (proto === target.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
};

class Parent {
  constructor(name) {
    this.name = name;
  }
}

let a = new Parent('a');

let b = {};

const result = isInstanceof(b, Parent);

console.log('result :>> ', result);
