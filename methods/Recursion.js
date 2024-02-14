const fact = (num) => {
	if (num === 0) return 1;
	return num * fact(num - 1);
};

const fibonacci = (num) => {
	if (num <= 1) {
		return 1;
	}
	return fibonacci(num - 1) * fibonacci(num - 2);
};

const a = [1, 2, 3, 4, 5, [[[[[[[[[[[[[[6]]]]]]]]]]]]]]];
