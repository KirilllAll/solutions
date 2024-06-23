function averageOfSubtree(root: TreeNode | null): number {
    let countRes = 0;

    function dfs(root: TreeNode | null) {
        let obj = { sum: 0, count: 0 };
        if (!root) return obj;

        let a = dfs(root.left);
        let b = dfs(root.right);

        obj = { ...obj, sum: a.sum + b.sum + root.val, count: a.count + b.count + 1 };

        let temp = Math.floor(obj.sum / obj.count);

        if (root.val === temp) countRes += 1;

        return obj;
    }

    dfs(root);
    return countRes;
}
