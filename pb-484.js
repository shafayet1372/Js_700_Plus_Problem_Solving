/* Are the Sum of Digits in the Numbers Equal?
Write a function that takes an array of two numbers and determines if the sum of the digits in each number are equal to each other.

Examples
isEqual([105, 42]) ➞ true
# 1 + 0 + 5 = 6
# 4 + 2 = 6

isEqual([21, 35]) ➞ false

isEqual([0, 0]) ➞ true
Notes
N/A
 */

function isEqual(arr) {
  let values = []
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i].toString().split("")
    let sum = 0
    for (let j = 0; j < num.length; j++) {
      sum += parseInt(num[j])
    }
    values[i] = sum
  }
  return values[0] == values[1]
}

console.log(isEqual([105, 42]))