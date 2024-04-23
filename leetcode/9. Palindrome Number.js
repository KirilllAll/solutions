const divmod = (x, y) => [Math.floor(x / y), x % y];
const isPalindrome = function (x) {
	if (x < 0) {
		return false;
	}

	let origin = x;
	let reserveNum = 0;

	while (x) {
        const [a,b] = divmod(x, 10)

		reserveNum = reserveNum * 10 + b;

		x = a;
	}

	return reserveNum === origin;
};

const testData = {
	one: 121,
	two: -121,
	three: 10,
};
