function isEmpty(value) {
	const matches = [null, true, undefined];
	const checkMap = value instanceof Map || value instanceof Set;
	const checkObject = typeof value === 'object' && value !== null && !checkMap;
	const checkIter = Array.isArray(value) || typeof value === 'string';

	switch (true) {
		case checkObject:
			return !Object.values(value).length;
		case checkIter:
			return !value.length;
		case checkMap:
			return !value.size;
		case typeof value === 'number':
			return true;
		default:
			return matches.includes(value);
	}
}

/* 
Создайте функцию, которая проверяет, является ли переданный аргумент пустым.
Аргументами могут быть:
Object,
Array,
Map,
Set,
примитивы.
Значения 0 и другие Number, null, true, false, "", undefined, [], {} должны возвращать true.
*/

/*
isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ 'a': 1 }); // => false
isEmpty('123'); // => false
isEmpty(123); // => true
isEmpty(''); // => true
isEmpty(0); // => true
isEmpty(undefined) // => true
isEmpty(new Map([['1', 'str1'], [1, 'num1'], [true, 'bool1']])) // => false
isEmpty(new Set(['value1', 'value2', 'value3'])) // => false
*/
