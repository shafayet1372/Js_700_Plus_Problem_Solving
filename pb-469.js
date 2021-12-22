/* Identical Subarrays
Create a function that takes in a two-dimensional array and returns the number of sub-arrays with only identical elements.

Examples
countIdentical([
  [1],
  [2],
  [3],
  [4]
]) ➞ 4

// Single-item arrays still count as having identical elements.


countIdentical([
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 4]
]) ➞ 1


countIdentical([
  [33, 33],
  [5],
  ["a", "a"],
  [2, 2, 2],
  [1, 2, 2],
  [3, 1]
]) ➞ 4

// 4 arrays with identical elements: [33, 33], [5], ["a", "a"], and [2, 2, 2]


countIdentical([
  ["@", "@", "@", "@"],
  [2, 3], [3, 4], [4, 4]
]) ➞ 2
Notes
Single-element arrays count as (trivially) having identical elements.
 */





function countIdentical(arr) {
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    let visited = []
    for (let j = 0; j < arr[i].length; j++) {
      if (visited.indexOf(arr[i][j]) == -1) {
        visited.push(arr[i][j])
      }
    }
    if (visited.length == 1) {
      counter++
    }
  }
  return counter
}

console.log(countIdentical([
  [1],
  [2],
  [3],
  [4]
]))