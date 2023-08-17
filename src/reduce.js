Array.prototype.reduceToMap = function(handler) {
  return this.reduce((target, current, index) => {
    target.push(handler.call(this, current, index, this));
    return target;
  }, []);
};
Array.prototype.reduceToFilter = function(handler) {
  return this.reduce((target, current, index) => {
    if (handler.call(this, current, index, this)) {
      target.push(current);
    }
    return target;
  }, []);
};
Array.prototype.reduceToForEach = function(handler) {
  return this.reduce((target, current, index) => {
    handler.call(this, current, index, this);
  }, []);
};
const arr = [1,2,3];
var ans = arr.reduceToMap((item, index, arr) => {
  return item * 2;
});


var ans2 = arr.reduceToFilter((item, index, arr) => {
  return item % 2 === 0;
});

arr.reduceToForEach((item, index, arr) => {
  return item * 2;
});

console.log('ans', ans);
console.log('ans2', ans2);