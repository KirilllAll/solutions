var isPerfectSquare = function (num) {
	let leftSide = 1;
	let rightSide = num;

	while (leftSide <= rightSide) {
		const middle = Math.floor((leftSide + rightSide) / 2);
		const square = middle * middle;

		if (square === num) {
			return true;
		}
		if (square > num) {
			rightSide = middle - 1;
		} else {
			leftSide = middle + 1;
		}
	}
	return false;
};
