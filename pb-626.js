/* Longest Sequence of Consecutive Zeroes
Write a function that returns the longest sequence of consecutive zeroes in a binary string.

Examples
longestZero("01100001011000") ➞ "0000"

longestZero("100100100") ➞ "00"

longestZero("11111") ➞ ""
Notes
If no zeroes exist in the input, return an empty string. */

function longestZero(s) {
  let str = s.split("1")
  return str.sort((a, b) => b.length - a.length)[0]
}

console.log(longestZero("01100001011000"))