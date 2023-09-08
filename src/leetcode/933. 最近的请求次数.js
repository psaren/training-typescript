
var RecentCounter = function() {
  this.list = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.list.push(t);
  let ans = 0;
  for (let i = this.list.length - 1;i >= 0;i--) {
    if (ans > 2999) {
      break;
    }
    if (t - this.list[i] < 3000) {
      ans++;
    } 
  }
  return ans;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */