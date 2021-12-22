/* Is the Number Symmetrical?
Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. 
A number is symmetrical when it is the same as its reverse.

Examples
isSymmetrical(7227) ➞ true

isSymmetrical(12567) ➞ false

isSymmetrical(44444444) ➞ true

isSymmetrical(9939) ➞ false

isSymmetrical(1112111) ➞ true
Notes
N/A

 */




function isSymmetrical(num) {
  let numbers = num.toString().split("")
  let num1 = ''
  for (let i = numbers.length - 1; i >= 0; i--) {
    num1 = num1 + numbers[i]
  }
  return parseInt(num1) == num
}

console.log(isSymmetrical(7227))