// iteration
const fib = function (n) {
	if (n === 0) {
		return 0;
	}
	let fb1 = 1;
	let fb2 = 1;
	for (let i = 2; i < n; i++) {
		let fb3 = fb1 + fb2;
		fb1 = fb2;
		fb2 = fb3;
	}
	return fb2;
};

// recursion

const fibRec = function (n) {
	if (n <= 1) return n;
	return fibRec(n - 1) + fibRec(n - 2);
};
