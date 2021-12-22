/* Missing Letters

Given a string containing unique letters, return a sorted string with the letters that don't appear in the string.
Examples

getMissingLetters("abcdefgpqrstuvwxyz") ➞ "hijklmno"

getMissingLetters("zyxwvutsrq") ➞ "abcdefghijklmnop"

getMissingLetters("abc") ➞ "defghijklmnopqrstuvwxyz"

getMissingLetters("abcdefghijklmnopqrstuvwxyz") ➞ ""

Notes

    The combination of both strings should be 26 elements long, including all the letters in the alphabet.
    Letters will all be in lowercase.
 */

function getMissingLetters(s) {
  str = s.split("")
  let missigLetter = []
  for (let i = 97; i <= 122; i++) {
    if (str.indexOf(String.fromCharCode(i)) == -1) {
      missigLetter.push(String.fromCharCode(i))
    }
  }
  return missigLetter.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("")
}

console.log(getMissingLetters("zyxwvutsrq"))