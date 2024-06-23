function getSubStr(s, t = 'abc') {
	// двигаю правый указатель пока не встречу подстроку
	// встретив подстркоу сдвигаю левый, пока ее не станет
	// если ее не стало двигаю правый
	let left = 0;
	let min = '';
	let map = {};

	for (const char of s) {
			map[char] = 0;
	}

	// help проверяет, что в текущем окне есть весь алфавит
	// на вход получает меп с текущим окном и алфавит для проверки
	const help = (mapObj, text) => {
			for (let char of text) {
					if (mapObj[char] === 0 || !map[char]) {
							return false;
					}
			}
			return true;
	};

	for (let right = 0; right < s.length; right += 1) {
			map[s[right]] += 1;

			while (help(map, t)) {
					if (min === '' || min.length >= s.slice(left, right).length) {
							min = s.slice(left, right + 1);
					}
					map[s[left]] -= 1;
					left += 1;
			}
	}
	return min;
}

console.log('abbcbcaba'.slice(0, 3));
console.log(getSubStr('abc'));