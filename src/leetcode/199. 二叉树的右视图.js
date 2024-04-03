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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (root === null) return [];
  const stack = [{ depth: 0, node: root }];
  const ans = [];
  let currentDepth = 0;
  while (stack.length) {
    const { depth, node } = stack.pop();
    if (depth === currentDepth) {
      ans.push(node.val);
      currentDepth++;
    }
    if (node.left) {
      stack.push({ depth: depth + 1, node: node.left });
    }
    if (node.right) {;
      stack.push({ depth: depth + 1, node: node.right });
    }
  }
  return ans;
};