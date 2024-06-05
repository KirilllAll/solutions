function maxPower(str) {
	let maxCount = 1;
	let maxLen = 0;

	for(let i = 0; i < str.length; i +=1){
		if(str[i] === str[i + 1]){
			maxCount += 1;
		} else {
			maxLen = Math.max(maxLen, maxCount);
			maxCount = 1;
		}
	}

	return maxLen;
}