/* Accumulating Array
Create a function that takes in an array and returns an array of the accumulating sum.

Examples
accumulatingArray([1, 2, 3, 4]) ➞ [1, 3, 6, 10]
// [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]

accumulatingArray([1, 5, 7]) ➞ [1, 6, 13]

accumulatingArray([1, 0, 1, 0, 1]) ➞ [1, 1, 2, 2, 3]

accumulatingArray([]) ➞ []
Notes
An empty array input should return an empty array []. */




function accumulatingArray(arr) {
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

console.log(accumulatingArray([1, 2, 3, 4]))