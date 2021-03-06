/* Count the Number of Duplicate Characters
Create a function that takes a string and returns the number of alphanumeric characters that occur more than once.

Examples
duplicateCount("abcde") ➞ 0

duplicateCount("aabbcde") ➞ 2

duplicateCount("Indivisibilities") ➞ 2

duplicateCount("Aa") ➞ 0
// Case sensitive
Notes
Duplicate characters are case sensitive.
The input string will contain only alphanumeric characters.
 */

function duplicateCount(str) {
  let s = [...new Set(str.split(""))]
  let s1 = str.split("")
  let counter1 = 0
  for (let i = 0; i < s.length; i++) {
    let counter2 = 0
    for (let j = 0; j < s1.length; j++) {
      if (s[i] == s1[j]) {
        counter2++
      }
    }
    if (counter2 > 1) {
      counter1++
    }
  }
  return counter1
}

console.log(duplicateCount('abcde'))