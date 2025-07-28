// 编写一个函数，该函数返回数据类型，要求返回自定义类的实例化对象时返回该类的名称。
const getType = (obj) => {
  if (obj === null) return 'null';
  if (typeof obj === 'object') {
    return obj.constructor.name;
  }
  return typeof obj;
};

function Person(name) {
  this.name = name;
}
const p = new Person('张三');
console.log(getType([]));