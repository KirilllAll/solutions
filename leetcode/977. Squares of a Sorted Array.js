const sortedSquares = function(nums) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    const res = [];
    while(leftPointer <= rightPointer){
        const first = nums[leftPointer] ** 2;
        const second = nums[rightPointer] ** 2;
        if(first > second){
            res.unshift(first);
            leftPointer ++;
        } else {
            res.unshift(second);
            rightPointer --;
        }
    }
    return res;
};
// можешь оценить сложность?
// за сколько работает unshift?
