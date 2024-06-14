//'AAAABBBCCXYZDDDDEEEFFFAAAAABBBBBBB'

const rfl = (str) => {
	if(!str) return '';
	
	if(str.length === 1) return str;
	
	let counter = 1;
	let result = str[0];
	
	for (let i = 1; i < str.length; i++) { 
		let current = str[i];
		if (current === str[i - 1]) {
				counter+=1;
		} else {
				if (counter === 1) { 
						result+=current;
				} else {
					result += counter;
					result += current;
					counter = 1;
				}
		}
}
 	if(counter !== 1) result += counter
	
	
	return result;
}

console.log(rfl('A')); //A
console.log(rfl('AAAB')) //A3B1
console.log(rfl('ABCCCC')) //ABC4
