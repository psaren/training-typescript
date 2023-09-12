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
var goodNodes = function (root) {
  return fn(root);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = {
  val: -1,
  left: {
    val: 5,
    left: { val: 4, left: null, right: null },
    right: {
      val: 4,
      left: {
        val: -4,
        left: {
          val: 0,
          left: { val: 3, left: null, right: null },
          right: null,
        },
        right: null,
      },
      right: null,
    },
  },
  right: {
    val: -2,
    left: {
      val: 2,
      left: {
        val: -2,
        left: { val: -1, left: null, right: null },
        right: null,
      },
      right: {
        val: 3,
        left: { val: -3, left: null, right: null },
        right: null,
      },
    },
    right: {
      val: -2,
      left: null,
      right: {
        val: -2,
        left: { val: -4, left: null, right: null },
        right: {
          val: -3,
          left: { val: 3, left: null, right: null },
          right: { val: -3, left: null, right: null },
        },
      },
    },
  },
};

function fn(root, max = Number.MIN_SAFE_INTEGER, ans = { count: 0 }) {
  if (!root) return count;
  if (root.val >= max) {
    ans.count++;
  }
  if (root.left) {
    fn(root.left, Math.max(root.val, max), ans);
  }
  if (root.right) {
    fn(root.right, Math.max(root.val, max), ans);
  }
  return ans.count;
}

console.log("first", goodNodes(root));
