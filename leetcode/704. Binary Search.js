const search = function (nums, target) {
    let leftSide = 0;
    let rightSide = nums.length - 1;

    while (leftSide <= rightSide) {
        const middle = Math.floor((leftSide + rightSide) / 2);
        if (target === nums[middle]) return middle;
        if (target < nums[middle]) {
            rightSide = middle - 1;
        } else {
            leftSide = middle + 1;
        }
    }
};
