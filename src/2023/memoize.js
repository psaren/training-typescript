const memoize = function (func, content) {
  let cache = Object.create(null);
  content = content || this;
  return (...key) => {
    if (!cache[key]) {
      cache[key] = func.apply(content, key);
    }
    console.log(cache)
    return cache[key];
  };
};

function add (x, y) {
  console.log('add');
  return x + y;
}

const calc = memoize(add);

console.log(calc(100, 200));
console.log(calc(100, 200));
console.log(calc(100, 200));
console.log(calc(100, 200));