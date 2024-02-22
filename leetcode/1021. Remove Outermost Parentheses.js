{
// Solutions with depth
const removeOuterParentheses = function (brackets) {
	let depth = 0;
	let resultString = '';

	for (const letter of brackets) {
		if (letter === '(') {
			depth += 1;
		}
		if (depth > 1) {
			resultString += letter;
		}
		if (letter === ')') {
			depth -= 1;
		}
	}
	return resultString;
};
}
{
// Solutions with stack
const removeOuterParentheses = function (s) {
    const stack1 = [];
    const stack2 = [];
    let result = '';
    const openBracket = '(';
    const closeBracket = ')';
    
    for (const letter of s) {
        if(stack1.length === 0 && letter === openBracket){
            stack1.push(openBracket)
            continue
        }
        if(stack1.length > 0 && letter === openBracket){
            stack2.push(openBracket)
            result += letter;
            continue
        }
        if(stack2.length > 0 && letter === closeBracket){
            stack2.pop();
            result += letter;
            continue
        } 
        if(stack2.length === 0 && letter === closeBracket){
            stack1.pop();
            continue
        } 
    }
    return result;
};
}