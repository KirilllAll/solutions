function isValid(s: string): boolean {
    const stack: string[] = [];
    ('()[]{}');
    for (const char of s) {
        switch (char) {
            case '(':
                stack.push(')');
                break;
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            default: {
                if (stack.pop() !== char) {
                    return false;
                }
            }
        }
    }

    return !stack.length;
}

console.log(isValid('()(())'));
