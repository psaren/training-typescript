function Parent(name) {
  this.name = name
}

Parent.prototype.sayName = function() {
  console.log('this.name', this.name);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

function clone (Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

clone(Parent, Child);
const child = new Child('hello', 32);
console.log(child.sayName())