/* Sum of Negative Integers
Create a function that takes a string containing integers as well as other characters and return the sum of the negative integers only.

Examples
negativeSum("-12 13%14&-11") ➞ -23
// -12 + -11 = -23

negativeSum("22 13%14&-11-22 13 12") ➞ -33
// -11 + -22 = -33
Notes
There is at least one negative integer. */

function negativeSum(chars) {
  let s = chars.match(/-\d*/g)
  return s.reduce((acc, val) => { return acc + parseInt(val) }, 0)
}

console.log(negativeSum("-12 13%14&-11"))