var makeGood = function (s) {
	const arrS = s.split('');

	return arrS
		.reduce((acc, item) => {
			let last = acc[acc.length - 1];
			if (acc.length && item.toUpperCase() === last.toUpperCase() && item !== last) {
				acc.pop();
			} else {
				acc.push(item);
			}
			return acc;
		}, [])
		.join('');
};


// Input: s = "leEeetcode"
// Output: "leetcode"

// Input: s = "abBAcC"
// Output: ""

// Input: s = "s"
// Output: "s"