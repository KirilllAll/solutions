const isIsomorphic = (s, t) => {
    if(s.length !== t.length) return false;

    const stringMap = new Map();
    const textMap = new Map();

    for(let i = 0; i < s.length; i++) {
        const charFromString = s[i];
        const charFromText = t[i];

        if(!stringMap.has(charFromString) && !textMap.has(charFromText)) {
            stringMap.set(charFromString, charFromText);
            textMap.set(charFromText, charFromString);
        } else if (stringMap.get(charFromString) !== charFromText || textMap.get(charFromText) !== charFromString) {
                return false;
            }
        
    }

    return true;
}
