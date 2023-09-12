/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const arr1 = leaf(root1);
  const arr2 = leaf(root2);
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


var leaf = function (root, leafVal = []) {
  const arr = [root];
  while (arr.length) {
    const current = arr.shift();
    if (current.left === null && current.right === null) {
      leafVal.push(current.val);
    }
    if (current.left) {
      leaf(current.left, leafVal);
    }
    if (current.right) {
      leaf(current.right, leafVal);
    }
  }
  return leafVal;
};
root3 = {
  val: 3,
  left: {
    val: 5,
    left: { val: 6, left: null, right: null },
    right: {
      val: 2,
      left: { val: 7, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
  },
  right: {
    val: 1,
    left: { val: 9, left: null, right: null },
    right: { val: 8, left: null, right: null },
  },
};
root4 = {
  val: 3,
  left: {
    val: 5,
    left: { val: 6, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
  right: {
    val: 1,
    left: { val: 4, left: null, right: null },
    right: {
      val: 2,
      left: { val: 9, left: null, right: null },
      right: { val: 8, left: null, right: null },
    },
  },
};
console.log("leaf(root3)", leaf(root3));
console.log("leaf(root4)", leaf(root4));
