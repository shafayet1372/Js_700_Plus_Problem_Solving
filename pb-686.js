/* const { number } = require("prop-types")

Count Palindrome Numbers in a Range
Create a function that returns the number of palindrome numbers in a specified range (inclusive).

For example, between 8 and 34, there are 5 palindromes: 8, 9, 11, 22 and 33. Between 1550 and 1552 there is exactly one palindrome: 1551.

Examples
countPalindromes(1, 10) ➞ 9

countPalindromes(555, 556) ➞ 1

countPalindromes(878, 898) ➞ 3
Notes
A palindrome number is a number which remains the same when its digits are reversed. For example, 2552 reversed is still 2552. The reflectional symmetry 
of this number makes it a palindromic number.
Single-digit numbers are trivially palindrome number */


function countPalindromes(num1, num2) {
  let counter = 0
  for (let i = num1; i <= num2; i++) {
    let val = i.toString().split("")
    if (parseInt(val.reverse().join("")) == i) {
      counter++
    }
  }
  return counter
}

console.log(countPalindromes(1, 10))