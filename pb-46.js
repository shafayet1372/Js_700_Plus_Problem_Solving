/* 
You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
addTwoDigits(n) = 11.
 */
function addTwoDigits(n) {
let digits=n.toString().split("")
return parseInt(digits[0])+parseInt(digits[1])
}

console.log(addTwoDigits(29))