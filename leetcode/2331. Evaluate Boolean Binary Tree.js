function evaluateTree(root) {
	if (root === null) return false;
	if (root.val === 0) return false;
	if (root.val === 1) return true;

	return root.val === 2
			? evaluateTree(root.left) || evaluateTree(root.right)
			: evaluateTree(root.left) && evaluateTree(root.right);
}