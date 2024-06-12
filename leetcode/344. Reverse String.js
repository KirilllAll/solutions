function reverseString(s){
	for(let start = 0; start < Math.floor(s.length / 2); start+=1){
		[s[start], s[s.length - 1 - start]] = [s[s.length - 1 - start], s[start]];
	}
};