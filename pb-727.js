/* Unmix My Strings
lPaeesh le pemu mnxit ehess rtnisg! Oh, sorry, that was supposed to say: Please help me unmix these strings!

Somehow my strings have all become mixed up; every pair of characters has been swapped. Help me undo this so I can understand my strings again.

Examples
unmix("123456") ➞ "214365"

unmix("hTsii  s aimex dpus rtni.g") ➞ "This is a mixed up string."

unmix("badce") ➞ "abcde"
Notes
The length of a string can be odd — in this case the last character is not altered (as there's nothing to swap it with). */

function unmix(str) {
  let s = str.split("")
  let len = (s.length % 2 == 0) ? s.length : s.length - 1
  for (let i = 0; i < len; i += 2) {
    let swap = s[i]
    s[i] = s[i + 1]
    s[i + 1] = swap
  }
  return s.join("")
}

console.log(unmix("hTsii  s aimex dpus rtni.g"))