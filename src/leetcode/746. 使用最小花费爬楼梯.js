/**
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

请你计算并返回达到楼梯顶部的最低花费。
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let minCost = cost[0];
  let prevCost = cost[1];

  for (let i = 2; i <= cost.length; i++) {
    let currentCost = Math.min(prevCost + cost[i - 1], minCost + cost[i - 2]);
    minCost = currentCost;
    prevCost = minCost;
  }

  return minCost;
};
