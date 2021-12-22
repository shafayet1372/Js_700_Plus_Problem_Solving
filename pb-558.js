/* Diamond Shaped Array

Create a function that returns an array that expands by 1 from 1 to the value of the input, and then reduces back to 1. 
Items in the arrays will be the same as the length of the arrays.
Examples

diamondArrays(1) ➞ [[1]]

diamondArrays(2) ➞ [[1], [2, 2], [1]]

diamondArrays(5) ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]

Notes

N/A */

function diamondArrays(x) {

  let ar1 = [], ar2 = []
  for (let i = 1; i <= x; i++) {
    let g1 = [], g2 = []
    for (let j = 0; j < i; j++) {
      g1.push(i)
    }
    for (let l = x - i; l >= 1; l--) {
      g2.push(x - i)
    }
    ar1.push(g1)
    if (g2.length) {
      ar2.push(g2)
    }
  }

  return [...ar1, ...ar2]
}
console.log(diamondArrays(2))