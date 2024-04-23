const firstPalindrome = function(words) {
    let result = ''
    const isValidPalindrom = (word) => {
      let start = 0;
      let end = word.length - 1;
  
      while (start < end) {
          if (word[start] !== word[end]) {
              return false;
          }
          start++;
          end--;
      }
      return true;
    }  
    
    for(let item of words) {
        if(isValidPalindrom(item)){
            result = item;
            break;
        }
    }

    return result;
  };

  const dataTest = {
    one: ["abc","car","ada","racecar","cool"],
    two: ["notapalindrome","racecar"],
    three: ["def","ghi"]
  }