interface Prop extends PropertyDescriptor {
  key: PropertyKey;
}
const _defineProperties = (target: Object, props: Prop[]) => {
  for (let i = 0;i < props.length;i++) {
    let descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

const createClass = (Constructor: Function, protoProps: Prop[], staticProps: Prop[]) => {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function Person(this: any, name: string, age: number) {
  this.name = name;
  this.age = age;
}
Person.prototype = {
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}, i was ${this.age} year old.`)
  }
}
