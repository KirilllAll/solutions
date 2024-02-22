const reverseWords = function (s) {
	return s
		.split(' ') // O(s)
		.map((item) => item.split('').reverse().join(''))// O(s) O(item.length)
		.join(' '); //O(s)
};
//[1,2,3] =>
