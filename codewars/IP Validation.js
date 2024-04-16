function isValidIP(str) {
	const arr = str.split('.');
	const regex = /[!@#$%^&*.,<>/\'";:?\n' '/aA-eE]/;
	if (arr.length === 4) {
		return arr.every((str) => {
			let number = parseInt(str, 10);

			if (regex.test(str)) return false;
			if (str.startsWith('0') && str.length > 1) return false;

			return !isNaN(number) && number >= 0 && number <= 255;
		});
	}

	return false;
}
