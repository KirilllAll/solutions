// Трибоначчи - это как фибоначчи, только трибоначи

var tribonacci = function (n, memo = {}) {
	if (n === 0) {
		return 0;
	} else if (n === 1 || n === 2) {
		return 1;
	} else if (memo[n]) {
		return memo[n];
	} else {
		memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
		return memo[n];
	}
};
