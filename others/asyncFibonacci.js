const arr = ['яблоко', 'слон', 'дуб', 'лес'];
number = 13;

const getSLicedStr = (str) => {
	return str.reduce((acc, item, index) => (index % 2 !== 0 ? [...acc, item.slice(1, item.length)] : acc), []);
};

const getFibonacci = (num) => {
	let fb1 = 1;
	let fb2 = 1;
	for (let i = 3; i <= num; i++) {
		let fb3 = fb1 + fb2;
		fb1 = fb2;
		fb2 = fb3;
	}
	return fb2;
};
// ['лон', 'ec'] 233
const getSomeAsyncData = (str, num) => {
	const string = new Promise((resolve, _) => resolve(getSLicedStr(str)));
	const nums = new Promise((resolve) => resolve(getFibonacci(num)));
	return Promise.all([string, nums]);
};
