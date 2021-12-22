/* Absolute Sum
Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

Examples
getAbsSum([2, -1, 4, 8, 10]) ➞ 25

getAbsSum([-3, -4, -10, -2, -3]) ➞ 22

getAbsSum([2, 4, 6, 8, 10]) ➞ 30

getAbsSum([-1]) ➞ 1
Notes
The term "absolute value" means to remove any negative sign in front of a number, and to think of all numbers as positive (or zero).
All the elements in the given array are in
 */

function getAbsSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i]
    if (val < 0) {
      val = val * (-1)
    }
    sum += val
  }
  return sum
}

console.log(getAbsSum([2, -1, 4, 8, 10]))