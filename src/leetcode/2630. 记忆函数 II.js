/**
 * @param {Function} fn
 */
function memoize(fn) {
  const argMap = new Map();
  const resultMap = new Map();
  let index = 0;
  return function(...args) {
    let key = '';
    for (let item of args) {
      if (!argMap.has(item)) argMap.set(item, index++);
      key += argMap.get(item) + '-';
    }

    if (!resultMap.has(key)) {
      resultMap.set(key, fn(...args));
    }
    return resultMap.get(key);
  }
}

getInputs = () => [[],[1],[1],[],[1,2],[1,2]]
let calls = 0;
fn = function (...arr) { 
  console.log(`calls: ${calls++}`)
  return arr.reduce((a,b)=>a+b,0); 
}

const inputs = getInputs();
const memoized = memoize(fn);
for (const arr of inputs) {
  // console.log('arr', arr);
  memoized(...arr);
}