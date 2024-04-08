const getValues = (root, data) => {
	if (root === null) {
		return [];
	}

	getValues(root.left, data);
	getValues(root.right, data);
	data.push(root.val);

	return data;
};

const postorderTraversal = function (root) {
	return getValues(root, []);
};
