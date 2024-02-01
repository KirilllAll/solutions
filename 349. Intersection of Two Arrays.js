const intersection = function(nums1, nums2) {
    // можешь оценить асимтотику?
    const uniqArr = new Set(nums1);
    const result = new Set();
    for (const item of nums2){
        uniqArr.has(item) ? result.add(item) : null;
    }

    return [...result];
};