const clearStr = (str) => {
	const stack = [];
	for (const item of str) {
		if (item !== '#') {
			stack.push(s);
		} else if (st.length > 0) {
			stack.pop();
		}
	}
	return stack.join('');
};

backspaceCompare = function (s, t) {
	return clearStr(s) === clearStr(t);
};
