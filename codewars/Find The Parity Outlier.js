function findOutlier(integers) {
    const filterEvenArr = integers.slice(0, 3).filter(even)

    return filterEvenArr.length >=2 ? integers.find(odd) : integers.find(even);

    function even(num) {
        return num % 2 === 0;
    }
    function odd(num) {
        return num % 2 !== 0;
    }
}

const data = {
    arr1: [160, 3, 1719, 19, 11, 13, -21],
    arr2: [2, 4, 0, 100, 4, 11, 2602, 36],
    arr3: [0, 1, 2],
    arr4: [1, 2, 3],
    arr5: [2,6,8,10,3],
    arr6: [0,0,3,0,0],
    arr7: [1,1,0,1,1]
}

