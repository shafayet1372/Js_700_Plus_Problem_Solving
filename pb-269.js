/* Conveyor Belts, Warp Tunnels
In this challenge, you have to deal with a matrix that is moving from the left to the right by a given amount of times, shifting its items as
 in a conveyor belt. At the end of the last array inside the matrix, there's a warp tunnel. The warp tunnel made appear the elements pushed through
 by the shifts at the beginning of the matrix, in the same order as they were before the shift. Look at the example below:

// Before the movement.
mtx = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
n = 2

// After the movement (2 shifts to the right).
mtx = [[8, 9, 1], [2, 3, 4], [5, 6, 7]]

// Shifting 2 times to the right, "8" and "9" are pushed through the warp tunnel.
// The warped elements appear at the start.
Given a matrix mtx and an integer n, implement a function that returns the same matrix with its elements shifted n times.

Examples
warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2) ➞ [[8, 9, 1], [2, 3, 4], [5, 6, 7]]

warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 8) ➞ [[2, 3, 4], [5, 6, 7], [8, 9, 1]]

warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9) ➞ [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 18) ➞ [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Notes
The given matrices are regular (each array shares the same number of elements contained) with variable lengths and the number of arrays contained.
The returned matrix must have the same dimensions as the original.
The given n can be greater than the total number of elements inside the matrix (see example #4). Each time you reach a complete shift cycle (so that e */



function warpTunnel(mtx, n) {
  let result = []
  let ar = mtx.reduce((acc, val) => {
    return [...acc, ...val]
  }, [])

  for (let i = 0; i < n; i++) {
    let val = ar.pop()
    ar.unshift(val)

  }
  for (let l = 0; l < ar.length; l += mtx[0].length) {
    result.push(ar.slice(l, l + mtx[0].length))

  }
  return result
}

console.log(warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2))