/* Odd Up, Even Down — N Times
Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

Adds two (+2) to each odd integer.
Subtracts two (-2) from each even integer.
Examples
evenOddTransform([3, 4, 9], 3) ➞ [9, -2, 15]
// Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

evenOddTransform([0, 0, 0], 10) ➞ [-20, -20, -20]

evenOddTransform([1, 2, 3], 1) ➞ [3, 0, 5]
Notes
N/A
 */




function evenOddTransform(arr, n) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i]
    for (let j = 0; j < n; j++) {
      if (val % 2 == 0) {
        arr[i] = arr[i] - 2
      } else {
        arr[i] = arr[i] + 2
      }
    }
  }
  return arr
}

console.log(evenOddTransform([3, 4, 9], 3))