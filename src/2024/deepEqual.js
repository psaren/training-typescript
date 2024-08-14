const isObject = (obj) => typeof obj === "object" && obj !== null;
// 递归版本
function deepEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2;
  }
  const keys = Object.keys(obj1);
  if (keys.length !== Object.keys(obj2).length) {
    return false;
  }
  for (let k of keys) {
    if (isObject(obj1[k]) || isObject(obj2[k])) {
      return deepEqual(obj1[k], obj2[k]);
    } else {
      if (obj1[k] !== obj2[k]) {
        return false;
      }
    }
  }
  return true;
}

// 迭代版本
function deepEqual2(o1, o2) {
  const stack = [];
  stack.push([o1, o2]);
  while (stack.length > 0) {
    const [obj1, obj2] = stack.pop();
    if (!isObject(obj1) || !isObject(obj2)) {
      return obj1 === obj2;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let k of keys1) {
      if (isObject(obj1[k]) || isObject(obj2[k])) {
        stack.push([obj1[k], obj2[k]]);
      } else {
        if (obj1[k] !== obj2[k]) {
          return false;
        }
      }
    }
  }
  return true;
}

const obj1 = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};
const obj2 = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};
const obj3 = {
  name: "John",
  age: 39,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
//


console.log(deepEqual2(obj1, obj2)); // true
console.log(deepEqual2(obj1, obj3)); // false