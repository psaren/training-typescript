/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function(generator) {
  let cancelCallback = null;

  const promise = new Promise((resolve, reject) => {
    const handle = (result) => {
      try {
        const next = generator.next(result);
        if (next.done) {
          resolve(next.value);
        } else {
          Promise.resolve(next.value).then(handle, reject);  
        }
      } catch (error) {
        reject(error);
      }
    };

    handle();

    cancelCallback = () => {
      reject('Cancelled');
    };
  });

  return [cancelCallback, promise];
}

generator = function* () {
  let result = 0;
  try {
    yield new Promise((res) => setTimeout(res, 100));
    result += yield new Promise((res) => res(1));
    yield new Promise((res) => setTimeout(res, 100));
    result += yield new Promise((res) => res(1));
  } catch (e) {
    return result;
  }
  return result;
};

const [cancel, promise] = cancellable(generator());

setTimeout(cancel, 150);

promise.catch(console.log);