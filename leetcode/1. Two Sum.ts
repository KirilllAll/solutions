function twoSum(nums: number[], target: number): number[] {
	const map = {};

	for(let i = 0; i < nums.length; i+=1) {
			let el = nums[i]
			if ((target - el) in map) {
					return [i, map[target-el]]
			}
			map[el] = i;   
	}
};