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
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function(root, targetSum) {
  if (root == null) return 0;
  let res = rootSum(root, targetSum);
  res += rootSum(root.left, targetSum);
  res += rootSum(root.right, targetSum);
  return res;
};

const rootSum = (root, targetSum) => {
  if (root == null) return 0;
  let res = 0;
  const { val } = root;
  if (val === targetSum) {
    res++;
  }
  res += rootSum(root.left, targetSum - val);
  res += rootSum(root.right, targetSum - val);
  return res;
};

