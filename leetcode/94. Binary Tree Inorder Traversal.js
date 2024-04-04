const getRootValues = (root, data) => {
	if (root === null) {
		return [];
	}

    getRootValues(root.left, data);

	data.push(root.val);

    getRootValues(root.right, data);

	return data;
};

const inOrderTraversal = function (root) {
	return getRootValues(root, []);
};