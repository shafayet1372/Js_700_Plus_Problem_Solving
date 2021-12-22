/* Remove Repeated Letters
Create a function that replaces all consecutively repeated letters in a word with single letters.

Examples
removeRepeats("aaabbbccc") ➞ "abc"

removeRepeats("bookkeeper") ➞ "bokeper"

removeRepeats("nananana") ➞ "nananana"
Notes
N/A */

function removeRepeats(str) {

  let s = str.split("")
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      s.splice(i, 1)
      i--
    }
  }
  return s.join("")
}

console.log(removeRepeats("aaabbbccc"))