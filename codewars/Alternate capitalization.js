function capitalize(s) {
	return s.split('').reduce(
		(acc, item, index) => {
			acc[0] += index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
			acc[1] += index % 2 === 0 ? item.toLowerCase() : item.toUpperCase();
			return acc;
		},
		['', '']
	);
}
