/* Harshad Number
A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.

Examples
isHarshad(75) ➞ false
// 7 + 5 = 12
// 75 is not exactly divisible by 12

isHarshad(171) ➞ true
// 1 + 7 + 1 = 9
// 9 exactly divides 171

isHarshad(481) ➞ true

isHarshad(89) ➞ false

isHarshad(516) ➞ true

isHarshad(200) ➞ true
Notes
 */
function isHarshad(n) {
  let divisor = n.toString().split("")
  .reduce((acc, val) => { return acc + parseInt(val) }, 0)
  return n % divisor == 0
}

console.log(isHarshad(75))