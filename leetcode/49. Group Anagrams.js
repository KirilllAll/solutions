function groupAnagrams(strs) {
	const map = {};

	for (const str of strs) {
		let key = str.split('').sort().join('');
		if(!map[key]) {
			map[key] = [str];
		} else {
			map[key].push(str);
		}

	}
	return Object.values(map);
};