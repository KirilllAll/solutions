// O(n^2)
const moveZeroes = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			nums.push(0);
		}
	}
	return nums;
};

// O(n^2)
const moveZeroes2 = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		let left = 0;
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] !== 0) {
				[nums[left], nums[i]] = [nums[i], nums[left]];
				left++;
			}
		}
	}
	return nums;
};


// O(n)
const moveZeroes3 = (nums) => {
	let index = 0;
	const length = nums.length;

	for (let i = 0; i < length; i++) {
		if (nums[i] !== 0) {
			nums[index] = nums[i];
			index++;
		}
	}

	for (let i = index; i < length; i++) {
		nums[i] = 0;
	}

	return nums;
};

// O(n) one loop 
const moveZeroes4 = function(nums) {
    let pointer2 = 0
    for(let pointer1 = 0; pointer1 < nums.length; pointer1++){
        if(nums[pointer1] !== 0) {
            [nums[pointer1], nums[pointer2]] = [nums[pointer2], nums[pointer1]];
            pointer2 +=1
        }
    }
    return nums;
};

/**
 * 
 * 
 * 
 * Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

 */
