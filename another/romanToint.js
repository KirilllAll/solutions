const RomanChars = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

function romanToInt(s) {
	const arrString = s.split('');

	return arrString.reduce((acc, char, index) => {
		let charsValue = RomanChars[char];
		let charsNextValue = RomanChars[arrString[index + 1]];

        charsValue < charsNextValue ? acc -= charsValue : acc += charsValue

        return acc;
	}, 0);
}

const TESTS = [
	'III', // 3
	'LVIII', // 58
	'XC', // 90
	'MCMXCIV', // 1994
];

TESTS.forEach((item) => {
	console.log(romanToInt(item));
});
