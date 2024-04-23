var isPalindrome = function (s) {
	const regex = /[\.,:;!?;`()@\-\#_\s\"'\[\]{}]/g;
	const result = s.replace(regex, '').toLowerCase().split('');

	let start = 0;
	let end = result.length - 1;

	while (start < end) {
		if (result[start] !== result[end]) {
			return false;
		}
		start++;
		end--;
	}
	return true;
};
const dataTest = {
	one: 'A man, a plan, a canal: Panama',
	two: 'race a car',
	three: ' ',
};
