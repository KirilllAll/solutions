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

function countGoodSubstringsWithMap(s: string): number {
    let left = 0;
    let countRes = 0;
    const map = new Map();

    if (s.length < 3) return 0;

    for (let i = 0; i < 2; i += 1) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    const check = (s: string, mapObj: any) => {
        for (const char of s) {
            if (mapObj.has(char) && mapObj.get(char) > 1) return false;
        }
        return true;
    };

    for (let r = 2; r < s.length; r += 1) {
        map.set(s[r], (map.get(s[r]) || 0) + 1);

        if (check(s, map)) countRes += 1;

        map.set(s[left], map.get(s[left]) - 1);

        if (map.get(s[left]) === 0) map.delete(s[left]);

        left += 1;
    }

    return countRes;
}
