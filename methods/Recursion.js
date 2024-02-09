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

const flatten = (nums) => {
	return nums.reduce((acc, item) => (Array.isArray(item) ? [...acc, ...flatten(item)] : [...acc, item]), []);
};
