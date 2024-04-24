const divmod = (x, y) => [Math.floor(x / y), x % y];

var addDigits = function (num) {
	while (num >= 10) {
		let current = num;
		let newNum = 0;
		while (current) {
			const [a, b] = divmod(current, 10);
			current = a;
			newNum += b;
		}
		num = newNum;
	}
	return num;
};
