function sJoin(...args) {
	const [one, ...rest] = args;

	return rest.reduce((acc, item, index) => {
			if (index !== args.length - 2) {
					acc += `${item}${one}`;
			} else {
					acc += item;
			}
			return acc;
	}, '');
}

console.log(sJoin('.', 'a', 'b', 'c')); // 'a.b.c'
console.log(sJoin('-', 'a', 'b', 'c', 'd')); // 'a-b-c-d'
console.log(sJoin('-', 'a')); // 'a'
