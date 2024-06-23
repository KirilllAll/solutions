/*
 * range(4); // => [0, 1, 2, 3]
 * range(-4); // => [0, -1, -2, -3]
 * range(1, 5); // => [1, 2, 3, 4]
 * range(0, 20, 5); // => [0, 5, 10, 15]
 * range(0, -4, -1); // => [0, -1, -2, -3]
 * range(1, 4, 0); // => [1, 1, 1]
 * range(0); // => []
 */

function range(start = 0, end, step = 1) {
	const result = [];

	if (end === undefined) {
		end = start;
		start = 0;
		step = Math.sign(end);
	}

	if (end === 0) {
		return result;
	}

	if (step > 0) {
		for (let i = start; i < end; i += step) {
			result.push(i);
		}
	} else if (step === 0) {
		for (let i = start; i < end; i += 1) {
			result.push(start);
		}
	} else {
		for (let i = start; i > end; i += step) {
			result.push(i);
		}
	}

	return result;
}
