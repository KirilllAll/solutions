// Сложность?

const flatten = (...stack) => {
	const result = [];
	while (stack.length) {
		const current = stack.shift();
		Array.isArray(current) ? stack.unshift(...current) : result.push(current);
	}
    return result;
};

// Recursion
// почему не работает конкат?
// Сложность?
const flattenRec = (nums) => {
	return nums.reduce((acc, item) => {
        if(Array.isArray(item)){
            acc.push(...flattenRec(item))
        } else {
            acc.push(item);
        }
        return acc;
    },[]);
};