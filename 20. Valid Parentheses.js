const isValid = function (s) {
	const arr = s.split('');

	const st = [];
	mp = {
		')': '(',
		'}': '{',
		']': '[',
	};

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === ')' || arr[i] === '}' || arr[i] === ']') {
			console.log(arr[i]);
			if (st.length > 0 && st[st.length - 1] !== mp[arr[i]]) {
				return false;
			} else {
				if (st.length === 0) {
					return false;
				}
				st.pop();
			}
		} else {
			st.push(arr[i]);
		}
	}

	return st.length === 0;
};

