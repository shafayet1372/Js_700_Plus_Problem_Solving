/* From A to Z
Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter. Note that if the 
range is given in capital letters, return the string in capitals also!

Examples
gimmeTheLetters("a-z") ➞ "abcdefghijklmnopqrstuvwxyz"

gimmeTheLetters("h-o") ➞ "hijklmno"

gimmeTheLetters("Q-Z") ➞ "QRSTUVWXYZ"

gimmeTheLetters("J-J") ➞ "J"
Notes
A hyphen will separate the two letters in the string.
You don't need to worry about error handling in this one (i.e. both letters will be the same case and the second letter will always be after the first alphabetically). */

function gimmeTheLetters(spectrum) {
  let s = spectrum.split("-")

  let first = s[0].charCodeAt(0)
  let last = s[1].charCodeAt(0)
  let str = ''
  for (first; first <= last; first++) {
    str += String.fromCharCode(first)
  }
  return str
}

console.log(gimmeTheLetters("a-z"))