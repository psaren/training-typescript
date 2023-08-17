function People() {
  this.type = 'people'
}

People.prototype.eat = function () {
  console.log('吃东西啦');
}

function Man(name) {
  People.call(this);
  this.name = name;
  this.color = 'black';
}

Man.prototype = Object.create(People.prototype, { construtor: Man });

const man = new Man('curry');

console.log('man', man);

man.eat();