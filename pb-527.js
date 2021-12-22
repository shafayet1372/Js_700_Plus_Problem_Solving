/* Largest Gap
Given an array of integers, return the largest gap between elements of the sorted version of that array.

Here's an illustrative example. Consider the array:

[9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]
... which, after sorting, becomes the array:

[0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
... so that we now see that the largest gap in the array is the gap of 11 between 9 and 20.

Examples
largestGap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]) ➞ 11
// After sorting get [0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
// Largest gap of 11 between 9 and 20

largestGap([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]) ➞ 4
// After sorting get [1, 3, 4, 5, 7, 7, 7, 7, 11, 12, 12, 13, 14]
// Largest gap of 4 between 7 and 11

largestGap([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9]) ➞ 2
// After sorting get [1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]
// Largest gap of 2 between 6 and 8 */

function largestGap(arr) {
  let ar = arr.slice().sort((a, b) => a - b)
  let num = -10000

  for (let i = 1; i < ar.length - 1; i++) {
    if (ar[i + 1] - ar[i] > num) {
      num = ar[i + 1] - ar[i]
    }
  }
  return num
}

console.log(largestGap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]))