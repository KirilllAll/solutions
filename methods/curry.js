
 function sum (a,b,c) {
	return a + b + c;
}

function multi (a,b,c) {
	return a * b  * c;
}

function curry (fn) {
	return function curried(...args) {
		if(args.length >=  fn.length) {
			return fn.call(this, ...args);
		}
		return curried.bind(this, ...args);
	}
}


const curriedSum = curry(sum);
const curriedMulti = curry(multi);
console.log('1 sum',curriedSum(1,2,3))
console.log('3 sum',curriedSum(1)(2)(3))
console.log('2 sum',curriedSum(1)(2, 3))
console.log('1 sum',curriedSum(1,2)(3))
// sum(1)(2)(3) => 6
// sum(1, 2)(3) => 6
// sum(1,2,3) => 6

