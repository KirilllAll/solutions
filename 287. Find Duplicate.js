function findDuplicate(nums) {
    // Define the search range start and end, initially set to 1 and the number of elements - 1
    let left = 1;
    let right = nums.length - 1;

    while (left < right) {
        // Calculate the midpoint of the current search range
        const mid = Math.floor((left + right) / 2);
        let count = 0;

        // Count how many numbers in the array are less than or equal to the midpoint
        for (const value of nums) {
            if (value <= mid) {
                count++;
            }
        }

        // If the count is greater than the midpoint, this indicates that the duplicate
        // is within the range [left, mid], so we focus the search there.
        // Otherwise, the duplicate is in the range [mid + 1, right].
        if (count > mid) {
            right = mid; // Narrow the search to the left half
        } else {
            left = mid + 1; // Narrow the search to the right half
        }
    }

    // Once left meets right, we've found the duplicate number
    return left;
}