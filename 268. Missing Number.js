// Runtime 73ms Memory 52.00 mb
// решение за O(nlogn), можешь объяснить почему за такую сложность?
// На самом деле, можно еще ускориться и написать решение за O(n).
// Придумаешь такое решение?
var missingNumber = function(nums) {
    const temp = nums.sort((a,b) => a - b);
    for(let index = 0; index <= temp.length; index++){
        if(temp[index] !== index){
            return index;
        }
    }

};

//263ms Memory 50.82 mb
// решение за O(n^2). Круто, что придумал второе решение, более быстрое.
var missingNumber2 = function(nums) {
    for (let i = 0; i <= nums.length; i++) {
      if (!nums.includes(i)) return i
    }
  };

// Input: nums = [3,0,1]
// Output: 2

// Input: nums = [0,1]
// Output: 2

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
