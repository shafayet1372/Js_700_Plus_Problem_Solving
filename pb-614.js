/* Upper or Lower Case
Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever 
takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.

Examples
stepsToConvert("abC") ➞ 1
// "abC" converted to "abc" in 1 step

stepsToConvert("abCBA") ➞ 2
// "abCBA" converted to "ABCBA" in 2 steps

stepsToConvert("aba") ➞ 0

stepsToConvert("abaCCC") ➞ 3
Notes
Return 0 if empty string.
Return 0 if the string is already entirely in one case.
Only alphabetic characters.
Input has no space */

function stepsToConvert(str) {
  let u = 0, l = 0
  let s = str.split("")
  for (let i = 0; i < str.length; i++) {
    if (s[i].toLowerCase() == s[i]) {
      l++
    } else {
      u++
    }
  }
  if (u > l) {
    return l
  } else if (u < l) {
    return u
  }
  return u
}

console.log(stepsToConvert("abaCCC"))