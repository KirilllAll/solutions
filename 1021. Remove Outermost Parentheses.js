const removeOuterParentheses = function (brackets) {
    let depth = 0;
    let resultString = '';

    for (const letter of brackets){
        if(letter === '('){
            depth +=1;
        }
        if(depth > 1){
            resultString+=letter;
        }
        if(letter === ')'){
            depth -=1;
        }
    }
    return resultString;
};
