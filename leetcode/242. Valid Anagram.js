const getMap = (s) => {
	const map = {};
	
	for(const char of s) {
			if(!map[char]) map[char] = 1;
			else {
					map[char] += 1;
			}
	}
	return map;
}

const isEqual = (s, t) => {
	const dict = 'qwertyuiopasdfghjklzxcvbnm';
	 
	 for (const char of dict) {
			 if(s[char] !== t[char]) return false;
	 }
	 
	 return true;
 }

const isAnagram = (s, t) => isEqual(getMap(s), getMap(t));