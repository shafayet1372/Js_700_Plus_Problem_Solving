/* Digit Distance
The digit distance between two numbers is the total value of the difference between each pair of digits.

To illustrate:

digitDistance(234, 489) ➞ 12
// Since |2 - 4| + |3 - 8| + |4 - 9| = 2 + 5 + 5
Create a function that returns the digit distance between two integers.

Examples
digitDistance(121, 599) ➞ 19

digitDistance(12, 12) ➞ 0

digitDistance(10, 20) ➞ 1
Notes
Both integers will be exactly the same length.
All digits in num2 have to be higher than their counterparts in num1. */




function digitDistance(num1, num2) {
  let n1 = num1.toString().split("")
  let n2 = num2.toString().split("")
  return n1.reduce((acc, val, i) => {
    let result = (val - n2[i]) < 0 ? (val - n2[i]) * (-1) : (val - n2[i])
    return acc = acc + result
  }, 0)
}

console.log(digitDistance(234, 489))