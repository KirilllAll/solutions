var twoSum = function(nums, target) {
	const map = {};
			
			for(let i = 0; i < nums.length; i+= 1) {
					map[nums[i]] = i;
			}
			
			for(let i = 0; i < nums.length; i++) {
					let temp = target - nums[i];
					
					if (temp in map && map[temp] !== i) {
							return [i, map[temp]]
					}
			}
	};