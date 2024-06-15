function meeting(s) {
	const data = s.toUpperCase().split(';').map(entry => {
			let [firstName, lastName] = entry.split(':');
			return { firstName, lastName };
	});

	data.sort((a, b) => {
			if (a.lastName < b.lastName) return -1;
			if (a.lastName > b.lastName) return 1;
			return a.firstName.localeCompare(b.firstName);
	});

	return data.reduce((acc, { firstName, lastName }) => acc += `(${lastName},${firstName})`, '');
}
