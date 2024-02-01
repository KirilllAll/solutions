const searchInsert = function(nums, target) {
    // бинпоиск пишешь хорошо. 
    // следующим шагом – написать задачу на бинпоиск без запуска программы и с первого раза
    let start = 0;
    let end = nums.length - 1;
    let position;
    while(start <= end){
        position = Math.floor((start + end)/2);
        if(target === nums[position]) return position;
        if(target < nums[position]){
            end = position - 1;
        } else {
            start = position + 1;
        }
    }
    return nums[position] > target ? position : position + 1;
};