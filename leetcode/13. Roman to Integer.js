var romanToInt = function (s) {
	const romanMap = {
			I: 1,
			V: 5,
			X: 10,
			L: 50,
			C: 100,
			D: 500,
			M: 1000,
	};

	return s.split('').reduce((acc, char, idx, array) => {
			let currentChar = romanMap[char];
			let nextChar = romanMap[array[idx + 1]];

			if(currentChar < nextChar) acc -= currentChar;
			else {
				acc += currentChar;
			}

			return acc;

	}, 0);
}