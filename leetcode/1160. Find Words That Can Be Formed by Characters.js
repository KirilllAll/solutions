const getCharsFreq = (chars, map) => {
    for(let char of chars){
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
}

function countCharacters(words, chars) {
    let res = 0;
    let charsMap = new Map();

    getCharsFreq(chars, charsMap);

    words.forEach(word => {
        let flag = true;
        let wordMap = new Map();
       
        
        for (let char of word) {
            const condition = !charsMap.has(char) || (wordMap.has(char) && wordMap.get(char) >= charsMap.get(char)); 

          
            if (condition) {
                flag = false;
                break;
            }
            wordMap.set(char, (wordMap.get(char) || 0) + 1);
        }
        

        if (flag) {
            res += word.length;
        }
    });

    return res;
}


{
let words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
}
{
let words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
}


