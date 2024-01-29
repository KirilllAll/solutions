const numJewelsInStones = function (jewels, stones) {
	const stonesArr = stones.split('');
	const jewelsArr = jewels.split('');
	let count = 0;
	for (let i = 0; i <= stonesArr.length; i++) {
		if (jewelsArr.includes(stonesArr[i])) {
			count += 1;
		}
	}
	return count;
};

const numJewelsInStones2 = function (jewels, stones) {
	let count = 0;
	for (const stone of stones) {
		if (jewels.includes(stone)) {
			count += 1;
		}
	}
	return count;
};
