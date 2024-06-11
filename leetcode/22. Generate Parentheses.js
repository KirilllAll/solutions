function generateParenthesis(n) {

	let result = [];
	
	function recursion(len, countLeft, countRight, str) {
			
	if (len === n * 2) {
			result.push(str);
	};
	
	if (countLeft < n) {
			recursion(len + 1, countLeft + 1, countRight, str + '('); 
	};
	
	if (countRight < countLeft) {
			recursion(len + 1, countLeft, countRight + 1, str + ')');
	}

	}
	
	recursion(0, 0, 0, '');
	
	return result;

};