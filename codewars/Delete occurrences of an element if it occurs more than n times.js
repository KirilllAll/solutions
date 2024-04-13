const deleteNth = (arr, n) => {
	const map = {};
	const res = [];

	arr.forEach((item) => (map[item] = n));

	arr.forEach((item) => {
		if (map[item] && map[item] !== 0) {
			res.push(item);
			map[item] -= 1;
		}
	});

	return res;
};
