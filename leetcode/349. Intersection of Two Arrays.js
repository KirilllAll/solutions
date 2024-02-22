const intersection = function(nums1, nums2) {
    // можешь оценить асимтотику?
    const uniqArr = new Set(nums1);//O(nums1.length)
    const result = new Set(); //O(1)
    for (const item of nums2){ // O(nums2.length)
        uniqArr.has(item) ? result.add(item) : null; //O(1)
    }

    return [...result];
    // O(nums1.length + nums2.length) === формально это линейная сложность
    // умножается цикл в цикле
    // сложение цикл и рядом цилк
};