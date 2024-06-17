class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function checkTree(root: TreeNode | null): boolean {
  if (!root) return false;
  let sum = 0;

  if (root.left && root.right) {
    sum = root.left.val + root.right.val;
  }

  return root.val === sum;
}
