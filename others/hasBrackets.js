const input = '{230 + + 50 } 50{ + 20  }+  {(20 + 10)}';
const output = true;

const input2 = '{230} + 50 + {(20 + 10)}';
const output2 = true;

const input3 = '(((230} + (50 + {(20 + 10)}';
const output3 = false;

const input4 = '([((230}] + (50 + {(20 + 10)]}';
const output4 = false;

const input5 = '[230] + [[((50))]] + 20 + 10';
const output5 = true;

const hasValidBrackets = (str) => {
	const arr = str.split('');
	const stack = [];

	const map = {
		'{': '}',
		'(': ')',
		'[': ']',
	};

	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];

		if (current === '(' || current === '{' || current === '[') {
			stack.push(current);
			continue;
		}
		if (current === ')' || current === '}' || current === ']') {
			if (stack.length > 0 && map[stack[stack.length - 1]] === current) {
				stack.pop();
			} else {
				return false;
			}
		}
	}

	return stack.length === 0;
};


