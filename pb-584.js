/* Return the Middle Character(s) of a String
Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. 
If the word's length is even, return the middle two characters.

Examples
getMiddle("test") ➞ "es"

getMiddle("testing") ➞ "t"

getMiddle("middle") ➞ "dd"

getMiddle("A") ➞ "A"
Notes
All test cases contain a single word (as a string). */

function getMiddle(str) {
  if (str.length % 2 == 1) {
    return str.substr(Math.floor(str.length / 2), 1)
  }
  return str.substr(str.length / 2 - 1, 2)
}

console.log(getMiddle('test'))