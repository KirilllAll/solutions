function isValidIP(str) {
    const arr = str.split(".");
    const regex = /[!@#$%^&*.,<>/\'";:?\n' '/a-d]/;
    if(arr.length === 4) {

       return arr.every((str) => {
        if(str.includes('e') || str.includes('E') || regex.test(str)) return false;
        if(str.startsWith('0') && str.length > 1) return false;
        let number = parseInt(str, 10);
        return !isNaN(number) && number >= 0 && number <= 255;
    })}
   
    return false;
   }