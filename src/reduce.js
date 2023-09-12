Array.prototype.reduceToMap = function (handler) {
  return this.reduce((target, current, index) => {
    target.push(handler.call(this, current, index, this));
    return target;
  }, []);
};
Array.prototype.reduceToFilter = function (handler) {
  return this.reduce((target, current, index) => {
    if (handler.call(this, current, index, this)) {
      target.push(current);
    }
    return target;
  }, []);
};
Array.prototype.reduceToForEach = function (handler) {
  return this.reduce((target, current, index) => {
    handler.call(this, current, index, this);
  }, []);
};
const arr = [1, 2, 3];
var ans = arr.reduceToMap((item, index, arr) => {
  return item * 2;
});

var ans2 = arr.reduceToFilter((item, index, arr) => {
  return item % 2 === 0;
});

arr.reduceToForEach((item, index, arr) => {
  return item * 2;
});
Array.prototype.myReduce = function (fn, initialValue) {
  if (this.length === 0) return initialValue;
  let acc = initialValue === undefined ? undefined : initialValue;
  let index = 0;
  if (acc === undefined) {
    index = 1;
    acc = this[0];
  }
  for (let i = index; i < this.length; i++) {
    acc = fn(acc, this[i], i, this);
  }
  return acc;
};


// console.log("ans", ans);
// console.log("ans2", ans2);
// console.log(
//   [{ age: 25 }, { name: "javascript" }].myReduce((a, b) => ({ ...a, ...b }), {})
// );
console.log(
  "reduce",
  [undefined, undefined, 1, 2].reduce((a, b, i) => {
    console.log('args', a, b, i)
    return a * b;
  })
);
console.log(
  "myReduce",
  [undefined, undefined, 1, 2].myReduce((a, b, i) => {
    console.log('args', a, b, i)
    return a * b;
  })
);
console.log(
  "myReduce1",
  [undefined, undefined, 1, 2].myReduce1((a, b, i) => {
    console.log('args', a, b, i)
    return a * b;
  })
);
