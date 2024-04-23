function findNum(arr) {
	let res = arr[0];
	for (let i = 1; i < arr.length; i++) {
		res = res ^ arr[i];
	}
	return res;
}

console.log(findNum([1, 2, 3, 1, 2]));
