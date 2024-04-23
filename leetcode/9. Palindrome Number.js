const isPalindrome = function (x) {
	if (x < 0) {
		return false;
	}

	let origin = x;
	let reserveNum = 0;

	while (x) {
		let lastNum = x % 10;

		reserveNum = reserveNum * 10 + lastNum;

		x = Math.floor(x / 10);
	}

	return reserveNum === origin;
};

const testData = {
	one: 121,
	two: -121,
	three: 10,
};
