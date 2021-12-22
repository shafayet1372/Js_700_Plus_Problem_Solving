/* Scalable Mountain?
Given an array of numbers, representing the height of a mountain in certain intervals, return whether this mountain is scalable.

A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

Examples
isScalable([1, 2, 4, 6, 7, 8]) ➞ true

isScalable([40, 45, 50, 45, 47, 52]) ➞ true

isScalable([2, 9, 11, 10, 18, 21]) ➞ false
Notes
The array may start at any number and can be any length.
 */




function isScalable(arr) {
  let result = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) <= 5) {
      result.push(true)
    } else {
      result.push(false)
    }
  }
  return result.every(val => val == true)
}

console.log(isScalable([1, 2, 4, 6, 7, 8]))