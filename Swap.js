const test = [1, 2, 3, 4];

[test[0], test[test.length - 1]] = [test[test.length - 1], test[0]];

// O(n)
const  reverseArray = (nums) => {
    for(let index = 0; index < Math.floor(nums.length/2); index++){
        [nums[index], nums[nums.length - index - 1]] = [nums[nums.length - index - 1], nums[index]]
    }
    return nums;
}

