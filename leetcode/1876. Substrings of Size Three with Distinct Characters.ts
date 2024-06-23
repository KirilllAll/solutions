function countGoodSubstrings(s: string): number {
    let left = 0;
    let arrRes: string[] = [];

    if (s.length < 3) return 0;

    const check = (s: string) => {
        const temp = s.split('');
        return new Set([...temp]).size === 3;
    };

    for (let r = 2; r < s.length; r += 1) {
        let currentStr = s.slice(left, r + 1);

        if (currentStr.length === 3) {
            if (check(currentStr)) arrRes.push(currentStr);
            left += 1;
        }
    }

    return arrRes.length;
}
