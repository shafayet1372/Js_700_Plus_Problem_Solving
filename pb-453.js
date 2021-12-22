/* Perfect Square Patch
Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.

Examples
squarePatch(3) ➞ [
  [3, 3, 3],
  [3, 3, 3],
  [3, 3, 3]
]

squarePatch(5) ➞ [
  [5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5]
]

squarePatch(1) ➞ [
  [1]
]

squarePatch(0) ➞ []
Notes
n >= 0.
If n === 0, return an empty array.
 */


function squarePatch(n) {
  let result = []
  for (let i = 0; i < n; i++) {
    let group = []
    for (let j = 0; j < n; j++) {
      group[j] = n
    }
    result[i] = group
  }
  return result
}

console.log(squarePatch(1))