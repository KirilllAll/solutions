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

function deepestLeavesSum(root: TreeNode | null): number {
    let sum = 0;
    let hight = 0;
    if (!root) return 0;

    function dfs(root, deep) {
        if (!root) return 0;

        if (deep > hight) {
            hight = deep;
            sum = 0;
        }

        if (root.left) dfs(root.left, deep + 1);

        if (root.right) dfs(root.right, deep + 1);

        if (deep === hight) sum += root.val;
    }

    dfs(root, 0);

    return sum;
}
