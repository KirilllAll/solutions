function summaryRanges(nums: number[]): string[] {
    let intervals: Array<number[]> = [];
    let currentInterval: number[] = [];

    if (nums.length === 0) return [];

    currentInterval[0] = nums[0];
    currentInterval[1] = nums[0];

    for (let i = 0; i < nums.length; i += 1) {
        let current = nums[i]; // 0 2
        let next = nums[i + 1]; // 1 4

        if (i === 0) {
            currentInterval[0] = nums[0];
            currentInterval[1] = nums[0];
        }

        if (current + 1 !== next && next !== undefined) {
            currentInterval[1] = current; //0 2
            const res = [...currentInterval];
            intervals.push(res);
            currentInterval[0] = next;
            currentInterval[1] = 0;
        }

        if (next === undefined) {
            currentInterval[1] = current;
            const res = [...currentInterval];
            intervals.push(res);
        }
    }

    return intervals.map(([first, second]) => {
        if (first !== second) {
            return `${first}->${second}`;
        } else {
            return second.toString();
        }
    });
}
