const clearStr = (str) => {
	const stack = [];
	for (const item of str) {
		if (item !== '#') {
			stack.push(item);
		} else if (stack.length > 0) {
			stack.pop();
		}
	}
	return stack.join('');
};

backspaceCompare = function (s, t) {
	return clearStr(s) === clearStr(t);
};
