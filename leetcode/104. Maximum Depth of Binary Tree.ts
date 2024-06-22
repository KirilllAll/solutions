/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    let value = 0;

    if (!root) return 0;

    function dfs(root: TreeNode | null, count: number) {
        if (!root) return;

        if (root.left) {
            dfs(root.left, count + 1);
        }

        if (root.right) {
            dfs(root.right, count + 1);
        }

        value = Math.max(value, count);
    }

    dfs(root, 1);

    return value;
}
