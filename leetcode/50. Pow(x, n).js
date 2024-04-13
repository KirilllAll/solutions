var myPow = function (x, n) {
	let temp;

	if (n === 0) {
		return 1;
	}

	if (n >= 0) {
		let condition = n % 2 === 0 ? 1 : x;
		temp = myPow(x, Math.floor(n / 2));
		return temp * temp * condition;
	}

	if (n < 0) {
		let condition = n % 2 === 0 ? 1 : 1 / x;
		temp = myPow(x, Math.ceil(n / 2));
		return temp * temp * condition;
	}
};
