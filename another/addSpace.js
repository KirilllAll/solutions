const input1 = 'A. B,C-D!EEE.';
const output1 = 'A. B, C - D! EEE';

const input2 = 'a.a';
const output2 = 'a. a';

const input3 = '.a.a';
const output3 = '. a. a';

const input4 = 'a..';
const output4 = 'a. .';

const input5 = 'a - a';
const output5 = 'a - a';

const getString = (data) => {
	let result = '';
	const space = ' ';

	for (let i = 0, pointer = 1; i < data.length; i++, pointer++) {
		let current = data[i];
		if ((current === '.' || current === ',' || current === '!' || current === '?') && data[pointer] !== space) {
			result += `${current}${space}`;
		} else if (current === '-' && data[pointer] !== space) {
			result += `${space}${current}${space}`;
		} else {
			result += current;
		}
	}

	return result.trim();
};

const getStringUseReduce = (data) =>
	data.split('').reduce((acc, item, index) => {
		const space = ' ';
		if ((item === '.' || item === ',' || item === '!' || item === '?') && data[index + 1] !== space) {
			acc += `${item}${space}`;
		} else if (item === '-' && data[index + 1] !== space) {
			acc += `${space}${item}${space}`;
		} else {
			acc += item;
		}
		return acc;
	}, '');
