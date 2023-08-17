/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    const limit = new Promise((resolve, reject) =>
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t)
    );
    try {
      return Promise.race([limit, fn.apply(null, args)]);
    } catch (err) {
      throw err;
    }
  };
};

fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

func = timeLimit(fn, 50);

func(5)
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));
