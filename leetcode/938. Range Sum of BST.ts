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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  const isOk = (num: number, low: number, high: number): boolean =>
    num >= low && num <= high;

  let sum = 0;

  const dfs = (root) => {
    if (!root) return;

    if (isOk(root.val, low, high)) sum += root.val;

    if (root.left) {
      dfs(root.left);
    }

    if (root.right) {
      dfs(root.right);
    }
  };

  dfs(root);

  return sum;
}
