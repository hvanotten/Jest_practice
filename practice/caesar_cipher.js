// n cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher,
//Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques.
//It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some
//fixed number of positions down the alphabet.For example, with a left shift of 3, D would be replaced by A,
// E would become B, and so on.The method is named after Julius Caesar, who used it in his private correspondence.
// Hint: You may need to convert letters to their unicode values. Be sure to read the documentation!
// write a function that takes a string to be encoded and a shift factor and then returns the encoded string:


const alphabet = [
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

function caesar(str) {
  // create accumulator
  let accumulator = "";
  // loop through string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // if char is not letter, add to acc
    const isALetter = alphabet.includes(char);
    if (isALetter === false) {
      accumulator += char;
    } else {
      const charIndex = alphabet.findIndex((c) => c === char);
      accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13];
    }
  }
  // else rotate + or - 13, add to acc

  // return accum
  return accumulator;
}


console.log(caesar("SERR CVMMN!"));
console.log(caesar("SERR YBIR?"));
console.log(caesar("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

module.exports = caesar;