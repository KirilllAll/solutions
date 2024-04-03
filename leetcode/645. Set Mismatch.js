const findDuplicate = (arr, map) => {
    arr.forEach(element => {
        if (map[element]) {
            duplicate = element; 
        } else {
            map[element] = 1;
        }
    });

    return duplicate;
}

const findErrorNums = function(nums) {
    let length = nums.length;
    let map = {};
    let duplicate = findDuplicate(nums, map);
    let missing;

    for (let i = 1; i <= length; i++) {
        if (!map[i]) {
            missing = i; 
            break;
        }
    }

    return [duplicate, missing];
 };

let nums = [1,2,2,4]
// Output: [2,3]

let nums2 = [1,1]
// Output: [1,2]

let nums3 = [2,2]
// Output: [2, 1]
