const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function isPangram(sentence) {
  let uppers = sentence.toUpperCase();
  let map = {};

  for (let char of uppers) {
    if(!map[char]) map[char] = 1;
  }

  for (let char of LETTERS) {
      if (!map[char]) {
          return false;
      }
  }
  return true;
}


console.log(isPangram("Pack my box with five dozen liquor jugs.")); // true

console.log(isPangram("Pack my box with five dozen liquor.")); // false