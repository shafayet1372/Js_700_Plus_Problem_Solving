/* Pyramid Arrays
Given a number n, return an array containing several arrays. Each array increment in size, from range 1 to n inclusive, contaning its length as the elements.

Examples
pyramidArrays(1) ➞ [[1]]

pyramidArrays(3) ➞ [[1], [2, 2], [3, 3, 3]]

pyramidArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]
Notes
n will be a positive integer. */

function pyramidArrays(n) {
  let result = []
  for (let i = 1; i <= n; i++) {
    let groups = []
    for (let j = 1; j <= i; j++) {
      groups.push(i)
    }
    result.push(groups)
  }
  return result
}

console.log(pyramidArrays(2))