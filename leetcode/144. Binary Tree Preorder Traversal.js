const getRootValues = (root, data) => {
	if (root === null) {
		return [];
	}

	data.push(root.val);

	if (root.left) {
		getRootValues(root.left, data);
	}
	if (root.right) {
		getRootValues(root.right, data);
	}

	return data;
};

const preOrderTraversal = function (root) {
	return getRootValues(root, []);
};
