const getMiddle = (s, e) => Math.floor(s + (e - s) / 2);

const guessNumber = function (n) {
	let start = 1;
	let end = n;
	const positions = {
		equal: 0,
		lower: 1,
		higher: -1,
	};

	while (start <= end) {
		const middle = getMiddle(start, end);
		if (positions.equal === guess(middle)) {
			return middle;
		}
		if (positions.lower === guess(middle)) {
			start = middle + 1;
		}
		if (positions.higher === guess(middle)) {
			end = middle - 1;
		}
	}

	return -1;
};
