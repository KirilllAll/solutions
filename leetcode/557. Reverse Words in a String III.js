const reverseWords = function (s) {
	return s
		.split(' ') // O(s)
		.map((item) => item.split('').reverse().join(''))// O(s) O(item.length)
		.join(' '); //O(s)
};

var reverseWords2 = function(s) {
	const arr = s.split(' ');

	const reverse = (arrItem) => {
			const res = [];
			for(let i = arrItem.length - 1; i >= 0; i -= 1){
					res.push(arrItem[i])
			}

			return res;
	}
	
 return arr.reduce((acc, item) => acc += reverse(item).join('') + ' ', '').trim('')
};
