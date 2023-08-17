/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    const ans = [];
    let i = 0;
    functions.forEach((fn) => {
      fn()
        .then((value) => {
          ans.push(value);
          i++;
          if (i === functions.length) {
            resolve(ans);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
    return ans;
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log);
