function isChar(char: string) {
    const code = char.charCodeAt(0);

    return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
}

function isPalindrome(str: string): boolean {
    if (str.length === 0) return true;
    const data = str
        .toLowerCase()
        .split('')
        .reduce((acc, item) => {
            if (isChar(item)) acc += item;
            return acc;
        }, '');

    let left = 0;
    let right = data.length - 1;

    while (left <= right) {
        if (data[left] !== data[right]) return false;
        left += 1;
        right -= 1;
    }

    return true;
}
