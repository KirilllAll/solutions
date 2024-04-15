function duplicateCount(text) {
	if (!text) return 0;

	const map = {};
	const textLarge = text.toUpperCase();
	let res = 0;

	textLarge.split('').forEach((item) => {
		let current = (map[item] || 0) + 1;
		map[item] = current;
		if (current == 2) res++;
	});

	return res;
}
