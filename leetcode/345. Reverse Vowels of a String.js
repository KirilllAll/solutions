function isVowel(str) {
	const dict = 'aeiou';

	return dict.includes(str.toLowerCase());
}

function reverseVowels(s) {
  const arrStr = s.split('');
  let start = 0;
  let end = arrStr.length - 1;
	
	while(start < end) {
			if(!isVowel(arrStr[start])) start++;
			else if(!isVowel(arrStr[end])) end--;
			else {
					[arrStr[start], arrStr[end]] =  [arrStr[end], arrStr[start]];
					start++;
					end--;
			}
  }

	return arrStr.join('');
};