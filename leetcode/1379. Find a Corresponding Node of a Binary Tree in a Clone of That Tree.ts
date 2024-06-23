// class TreeNode {
//     val: number;
//     left: TreeNode | null;
//     right: TreeNode | null;
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = val === undefined ? 0 : val;
//         this.left = left === undefined ? null : left;
//         this.right = right === undefined ? null : right;
//     }
// }

function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
    let ans: TreeNode | null = null;
    function dfs(root: TreeNode | null): TreeNode | null | undefined {
        if (!root) return null;

        if (root.val === target?.val) {
            ans = root;
            return;
        }

        dfs(root.left);
        dfs(root.right);
    }

    dfs(cloned);

    return ans;
}
