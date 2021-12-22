/* Number of Two or More Consecutive Ones
Create a function that counts the number of blocks of two or more adjacent 1s in an array.

Examples
countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1]) ➞ 2
// Two instances: [1, 1] (middle) and [1, 1, 1] (end)

countOnes([1, 0, 1, 0, 1, 0, 1, 0]) ➞ 0

countOnes([1, 1, 1, 1, 0, 0, 0, 0]) ➞ 1

countOnes([0, 0, 0]) ➞ 0
Notes
A single 1 by itself (surrounded by a zero on its left and right), does not count towards the total (see first example).
Each input will contain only zeroes and ones */


function countOnes(arr) {
  let counter = 0, block = 0, triger = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      counter++
    } else {
      triger = 1
    }
    if (triger || (arr[i] != 0 && i == arr.length - 1)) {
      if (counter >= 2) {
        block++
      }
      counter = 0
      triger = 0
    }
  }
  return block
}

console.log(countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1]))