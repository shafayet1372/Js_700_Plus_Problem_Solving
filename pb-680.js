/* Is the Sum of Letters Even or Odd?
Create a function that takes a string and returns true if the sum of the position of every letter in the alphabet is even and false if the sum is odd.

Examples
isAlpha("i'am king")  ➞ true
// 9 + 1 + 13 + 11 + 9 + 14 + 7 = 64 (even)

isAlpha("True") ➞ true
// 20 + 18 + 21 + 5= 64 (even)

isAlpha("alexa") ➞ false
// 1 + 12 + 5 + 24 + 1= 43 (odd)
Notes
Case insensitive.
Ignore non-letter symbols. */

function isAlpha(word) {
  let s = word.toLowerCase().split("")
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122) {
      sum += s[i].charCodeAt(0) - 96
    }
  }
  return sum % 2 == 0
}

console.log(isAlpha("i'am king"))