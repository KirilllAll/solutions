
function getRotateArray(nums, k) {
    if (k >= nums.length) k %= nums.length;
    function reverse(start, end) {
      while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
      }
    }
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
    return nums;
  }