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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const helper = (array1: number[], array2: number[]) => {
        if (array1.length !== array2.length) return false;
        for (let i = 0; i < array1.length; i += 1) {
            if (array1[i] !== array2[i]) return false;
        }
        return true;
    };

    function dfs(root: TreeNode | null, arr: number[]) {
        if (!root) return [];

        if (root.left) {
            dfs(root.left, arr);
        }

        if (root.right) {
            dfs(root.right, arr);
        }

        if (!root.left && !root.right) {
            arr.push(root.val);
        }

        return arr;
    }

    return helper(dfs(root1, []), dfs(root2, []));
}
