var maxDepth = function(s) {
    let count = 0;
    return s.split('').reduce((acc, char) => {
        if(char === '('){
            count +=1;
            acc = Math.max(acc, count);
        } else if(char === ')'){
            count -=1;
        }
        return acc;
    })

};

// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string

