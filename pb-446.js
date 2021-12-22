/* Flatten the Curve
Given an array of integers, replace every number with the mean of all numbers.

Examples
flattenCurve([1, 2, 3, 4, 5]) ➞ [3, 3, 3, 3, 3]

flattenCurve([0, 0, 0, 2, 7, 3]) ➞ [2, 2, 2, 2, 2, 2]

flattenCurve([4]) ➞ [4]

flattenCurve([]) ➞ []
Notes
Round averages to 1 decimal point.
Return an empty array if given an empty array (see example #4).
 */



function flattenCurve(arr) {
  let avg = Math.round(arr.reduce((acc, val) => {
    return acc + val
  }, 0) / arr.length * 10) / 10
  return arr.map(val => avg)
}

console.log(flattenCurve([1, 2, 3, 4, 5]))