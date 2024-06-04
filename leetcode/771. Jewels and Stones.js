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

const numJewelsInStones3 = function (jewels, stones) {
	const map = {};
	let res = 0;
	for (const stone of stones.split('')) {
		if(!map[stone]){
			map[stone] = 1;
		} else {
			map[stone] += 1;
		}
	}

	for (const jewel of jewels.split('')) {
		res += map[jewel] ? map[jewel] : 0
	}

	return res;
};
// в задаче очень маленькие ограничение на входные данные. 
// давай чуть подробнее обусдим задачу.
// можешь оценить сложность алгоритмов?
// можно ли придумать оптимальнее?
