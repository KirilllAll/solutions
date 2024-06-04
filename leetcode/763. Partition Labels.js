function separateStr (str) {
	const map = {};
	const result = [];
	const arrStr = str.split('');
	let length = 0;
	let end = 0;

	arrStr.forEach((char, index) => {
			map[char] = index;
		})

		arrStr.forEach((item, idx) => {
			end = Math.max(end, map[item]);
			length += 1;

			if(end === idx){
				result.push(length);
				length = 0;
			}
		})

	return result;
}