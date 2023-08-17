// sum(1,2,3).sumOf();// 6
// sum(1)(2,4)(2).sumOf(); //9

function sum(...args) {
  const fn = (...args1) => {
    return sum.apply(this, [...args, ...args1]);
  };
  fn.sumOf = () => args.reduce((a, b) => a + b, 0);
  return fn;
}

console.log(sum(1,2)(3,4).sumOf());