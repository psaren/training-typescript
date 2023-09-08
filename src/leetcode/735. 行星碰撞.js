/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const ans = [asteroids[0]];
  for (let i = 1;i < asteroids.length;i++) {
    let last = ans[ans.length - 1];
    if ((last * asteroids[i] > 0) || (last < 0 && asteroids[i] > 0)) {
      ans.push(asteroids[i]);
      continue;
    }
    let explode = false;
    while (ans.length > 0) {
      let last = ans.pop();
      if (last * asteroids[i] > 0) {
        ans.push(last, asteroids[i]);
        break;
      }
      if (Math.abs(last) > Math.abs(asteroids[i])) {
        ans.push(last);
        explode = true;
        break;
      } else if (Math.abs(last) === Math.abs(asteroids[i])) {
        explode = true;
        break;
      }
    }
    if (ans.length === 0 && !explode) {
      ans.push(asteroids[i]);
    }
  }
  return ans;
};

console.log(asteroidCollision([5,10,-5]));
console.log(asteroidCollision([8,-8]));
console.log(asteroidCollision([10,2,-5]));
console.log(asteroidCollision([-2,-1,1,2]));
console.log(asteroidCollision([-2,-2,1,-2]));
