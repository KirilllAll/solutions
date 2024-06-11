var relativeSortArray = function (arr1, arr2) {
	const countMap = {};
	const rest = [];
	const result = [];
	
	for (const item of arr2) {
			countMap[item] = 0;
	}

	for (const value of arr1) {
			if(value in countMap) {
					countMap[value] +=1;
			} else {
					rest.push(value);
			}
	}
	
	rest.sort((a, b) => a - b);

	
	for (const item of arr2) {
		if(item in countMap) {
			let temp = countMap[item]
			while(temp--) {
				result.push(item)
			}
		}
			
	}
	
	
	
	
	return [...result, ...rest];
	
	
};