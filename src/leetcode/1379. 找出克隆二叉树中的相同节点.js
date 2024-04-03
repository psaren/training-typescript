/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  const preorder = (root, cloned, callback) => {
    if (root) {
      callback(root, cloned);
      preorder(root.left, cloned.left, callback);
      preorder(root.right, cloned.right, callback);
    }
  };
  const l1 = [];
  const l2 = [];
  preorder(original, cloned, (node1, node2) => {
    l1.push(node1);
    l2.push(node2);
  });

  for (let i = 0;i < l1.length;i++) {
    if (l1[i] === target) {
      return l2[i];
    }
  }
  return null;
};

var getTargetCopy = function(original, cloned, target) {
  const queue = [[original, cloned]];
  while (queue.length) {
    const [o, c] = queue.shift();
    if (o === target) {
      return c;
    }
    if (o.left) {
      queue.push([o.left, c.left]);
    }
    if (o.right) {
      queue.push([o.right, c.right]);
    }
  }
};
