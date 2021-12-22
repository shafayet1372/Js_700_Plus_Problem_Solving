/* Get the Diagonals
Given a square array (n*n size) implement a function that returns a new array containing two arrays equal to the two diagonals, in the following order:

diagonal 1 = from upper-left to lower-right corner
diagonal 2 = from upper-right to lower-left corner
Examples
getDiagonals([ [1, 2], [3, 4] ]) ➞ [ [1, 4], [2, 3] ]

getDiagonals([ ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"] ]) ➞ [ ["a", "e", "i"], ["c", "e", "g"] ]

getDiagonals([ [true] ]) ➞ [ [true], [true] ]
Notes
Your function must also work with single elements or empty arrays.
Try to build both diagonals with a single loop. */

function getDiagonals(arr) {
  let result = []
  if(!arr.length){
    return [[],[]]
  }
  let left = 0, right = arr[0].length - 1
  let g1 = [], g2 = []
  for (let i = 0; i < arr.length; i++) {
    g1.push(arr[i][left++])
    g2.push(arr[i][right--])
    if (i == arr.length - 1) {
      result.push(g1, g2)
    }
  }
  return result
}

console.log(getDiagonals([
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]]))