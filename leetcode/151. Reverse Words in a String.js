function reverseWords(s) {
	const arrStr = s.split(' ');
	 
	 return arrStr.reduceRight((acc, item) => {
			 if(item.length > 0) {
					 acc += item + ' ';
			 }
			 
			 return acc;
	 }, '').trim();
};