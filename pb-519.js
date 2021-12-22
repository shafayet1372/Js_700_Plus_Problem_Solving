/* Geometry 3: Perimeter of a Triangle
Write a function that takes the coordinates of three points in the form of a 2d array and returns the perimeter of the triangle. 
The given points are the vertices of a triangle on a two-dimensional plane.

Examples
perimeter([[15, 7], [5, 22], [11, 1]]) ➞ 47.08

perimeter([[0, 0], [0, 1], [1, 0]]) ➞ 3.42

perimeter([[-10, -10], [10, 10 ], [-10, 10]]) ➞ 68.28
Notes
The given points always create a triangle.
The numbers in the argument array can be positive or negative.
Output should have 2 decimal places
This challenge is easier than it looks. */

function perimeter(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum += Math.sqrt(Math.pow(arr[j][0] - arr[i][0], 2) + Math.pow(arr[j][1] - arr[i][1], 2))
    }
  }
  return (Math.round((sum) * 100) / 100)
}

console.log(perimeter([[15, 7], [5, 22], [11, 1]]))