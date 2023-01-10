interface Prop extends PropertyDescriptor {
  key: string;
}
const _defineProperties = (target: Object, props: Prop[]) => {
  for (let i = 0;i < props.length;i++) {
    let descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if (descriptor.value) {
      descriptor.writable = true;
    }
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

const createClass = (Constructor: Function, protoProps: Prop[], staticProps: Prop[]) => {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}