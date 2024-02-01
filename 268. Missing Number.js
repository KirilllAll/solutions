// O(nlogn)
var missingNumber = function (nums) {
	const temp = nums.sort((a, b) => a - b);
	for (let index = 0; index <= temp.length; index++) {
		if (temp[index] !== index) {
			return index;
		}
	}
};

// O(logn)
var missingNumber2 = function (nums) {
	for (let i = 0; i <= nums.length; i++) {
		if (!nums.includes(i)) return i;
	}
};

// O(n)
var missingNumber3 = function (nums) {
	const hash = {};
	for (let i = 0; i <= nums.length; i++) {
		hash[nums[i]] = true;
	}
	for (let k = 0; k <= nums.length; k++) {
		if (!hash[k]) {
			return k;
		}
	}
};

// Input: nums = [3,0,1]
// Output: 2

// Input: nums = [0,1]
// Output: 2

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
