/* Is the Word an Isogram?
An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

Examples
isIsogram("Algorism") ➞ true

isIsogram("PasSword") ➞ false
// Not case sensitive.

isIsogram("Consecutive") ➞ false
Notes
Ignore letter case (should not be case sensitive).
All test cases contain valid one word strings. */

function isIsogram(str) {

  /*
  shortway
  return [...new Set(str.toLowerCase())].length == str.length */

  let visited = []
  let s = str.toLowerCase()
  for (let i = 0; i < s.length; i++) {
    if (visited.indexOf(s[i]) == -1) {
      visited.push(s[i])
    } else {
      return false
    }
  }
  return true
}

console.log(isIsogram("Algorism"))