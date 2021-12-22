/* Double Letters
Create a function that takes a word and returns true if the word has two consecutive identical letters.

Examples
doubleLetters("loop") ➞ true

doubleLetters("yummy") ➞ true

doubleLetters("orange") ➞ false

doubleLetters("munchkin") ➞ false
Notes
N/A
 */

function doubleLetters(word) {

  let s = word.split('')
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      return true
    }
  }
  return false
}

console.log(doubleLetters('loop'))