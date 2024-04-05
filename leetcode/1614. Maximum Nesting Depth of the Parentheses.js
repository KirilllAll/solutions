var maxDepth = function(s) {
    let stack = []; 
    let depth = 0; 

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
            depth = Math.max(depth, stack.length);
        } else if (s[i] === ')') {
            stack.pop(); 
        }
    }

    return depth;

};

// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string

