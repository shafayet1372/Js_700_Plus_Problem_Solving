/* In the Centre?
Given a string containing mostly spaces and one non-space character, return whether the character is positioned in the very centre of the string.
 This means the number of spaces on both sides should be the same.

Examples
isCentral("  #  ") ➞ true

isCentral(" 2    ") ➞ false

isCentral("@") ➞ true
Notes
Only one character other than spaces will be given at a time. */

function isCentral(str) {
  let s = str.split("")
  let index
  for (let i = 0; i < s.length; i++) {
    if (s[i] != ' ') {
      index = i + 1
      break
    }
  }


  return s.length - index == Math.abs(1 - index)

}

console.log(isCentral("  #  "))