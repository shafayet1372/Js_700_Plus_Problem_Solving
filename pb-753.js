/* String Expansion
Create a function which takes a string txt and expands it as per following rules:

The numeric values represent the occurrence of each letter preceding that numeric value.
stringExpansion("3M2u5b2a1s1h2i1r") ➞ "MMMuubbbbbaashiir"
The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.
stringExpansion("3Mat")➞ "MMMaaattt"      // correct

stringExpansion("3Mat") ➞ "MMMat"          // wrong
stringExpansion("3Mat") ➞ "MatMatMat"      // wrong
If there are consecutive numeric characters, ignore them all except last one.
stringExpansion("3M123u42b12a") ➞ "MMMuuubbaa"
If there are two consecutive alphabetic characters then the string will remain unchanged.
stringExpansion("airforce") ➞ "airforce"
Empty strings should return an empty string.
stringExpansion("") ➞ ""
Notes
N/A
 */

function stringExpansion(txt) {
  let str = "";
  let num = null;
  for (let i = 0; i < txt.length; i++) {
    if (!isNaN(txt[i]) && isNaN(txt[i + 1])) {
      num = parseInt(txt[i]);
    }

    if (!num && isNaN(txt[i]) && parseInt(txt[i - 1]) != 0) {
      str += txt[i];
    } else {
      str += isNaN(txt[i]) && num > 0 ? txt[i].repeat(num) : "";
    }
  }
  return str;
}

console.log(stringExpansion("0d4n8d2b"));
