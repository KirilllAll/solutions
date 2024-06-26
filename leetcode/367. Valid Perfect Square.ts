function isPerfectSquare(num: number): boolean {    
	let left = 0;
	let right = num;
			
	while(left <= right) {
	let middle = Math.floor((left + right)/2);
	
	if(middle*middle <= num) {
			left = middle + 1;
	} else {
			right = middle - 1;
	}
	}
	
	return left*left === num || right*right === num     
};