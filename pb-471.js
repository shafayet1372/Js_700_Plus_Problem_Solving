/* Cumulative Array Sum
Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.

Examples
cumulativeSum([1, 2, 3]) ➞ [1, 3, 6]

cumulativeSum([1, -2, 3]) ➞ [1, -1, 2]

cumulativeSum([3, 3, -2, 408, 3, 3]) ➞ [3, 6, 4, 412, 415, 418]
Notes
Return an empty array if the input is an empty array. */


function cumulativeSum(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      result.push(arr[i])
    } else {
      result[i] = result[i - 1] + arr[i]
    }
  }
  return result
}

console.log(cumulativeSum([1, 2, 3]))