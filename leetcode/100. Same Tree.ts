function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    function dfs(root1: TreeNode | null, root2: TreeNode | null) {
        if (!root1 && !root2) return true;

        if (!root1 || !root2) return false;

        let a = dfs(root1.left, root2.left);
        let b = dfs(root1.right, root2.right);

        return root1.val === root2.val && a && b;
    }

    return dfs(p, q);
}
