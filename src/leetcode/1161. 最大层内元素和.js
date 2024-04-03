/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
  const stack = [{ depth: 0, node: root }];
  let currentDepth = 0;
  let sumArr = [];
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;
  while (stack.length) {
    const { depth, node } = stack.shift();
    if (depth === currentDepth) {
      sum += node.val;
    } else if (depth > currentDepth) {
      max = Math.max(max, sum);
      sumArr.push(sum);
      sum = node.val;
      currentDepth = depth;
    }
    if (node.left) {
      stack.push({ depth: depth + 1, node: node.left });
    }
    if (node.right) {
      stack.push({ depth: depth + 1, node: node.right });
    }
  }
  return sumArr.indexOf(max) + 1;
};