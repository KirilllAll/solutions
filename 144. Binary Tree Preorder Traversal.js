const getRootValues = (root, data) => {
	if (root === null) {
		return [];
	}

	data.push(root.val);

	if (root.left) {
		getRoot(root.left, data);
	}
	if (root.right) {
		getRoot(root.right, data);
	}

	return data;
};

const preorderTraversal = function (root) {
	return getRootValues(root, []);
};
