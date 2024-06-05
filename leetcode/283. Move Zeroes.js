
// O(n)
const moveZeroes = (nums) => {
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
function moveZeroes (nums) {
	let pointer = 0;

	const swap = (arr, first, second) => {
		[arr[first], arr[second]] = [arr[second], arr[first]];
	}

	for(let index = 0; index < nums.length; index++){
		if(nums[index] !== 0) {
			swap(nums, index, pointer);
			pointer +=1
		}
}
return nums;
}
