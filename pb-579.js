/* Multiplying Numbers in a String
Given a string of numbers separated by a comma and space, return the product of the numbers.

Examples
multiplyNums("2, 3") ➞ 6

multiplyNums("1, 2, 3, 4") ➞ 24

multiplyNums("54, 75, 453, 0") ➞ 0

multiplyNums("10, -2") ➞ -20
Notes
Bonus: Try to complete this challenge in one line! */

function multiplyNums(nums) {
  return nums.split(", ").reduce((acc, val) => { return acc * val }, 1)

}

console.log(multiplyNums("54, 75, 453, 0"))