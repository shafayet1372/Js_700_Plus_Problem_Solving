/* Check Magic Square
A "magic square" is a square divided into smaller squares each containing a number, such that the numbers in each vertical, horizontal, and 
diagonal row add up to the same value.

3x3 Magic Square

Write a function that takes a 2D array, checks if it's a magic square and returns either true or false depending on the result.

Examples
isMagicSquare([
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2]
]) ➞ true

isMagicSquare([
  [16,  3,  2, 13],
  [ 5, 10, 11,  8],
  [ 9,  6,  7, 12],
  [ 4, 15, 14,  1]
]) ➞ true

isMagicSquare([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ false
Notes
Check diagonals as well.
Test input will always be square.
Check the Resources tab for additional info on magic square */







function isMagicSquare(square) {
  for (let i = 0; i < square.length; i++) {
    let uTod = 0, lTor = 0, dia = 0, uTol
    for (let j = 0; j < square[i].length; j++) {
      let sum1 = 0, sum2 = 0, sum3 = 0, len = square[i].length
      if (j == 0) {
        for (let m = 0; m < len; m++) {
          sum1 = sum1 + square[i][lTor]
          sum2 = sum2 + square[uTod][i]
          sum3 = sum3 + square[uTod][dia]
          dia++
          lTor++
          uTod++
        }
        if (!(sum1 == sum2 && sum1 == sum3 && sum2 == sum3)) {
          return false
        }
      } else if (j == square[i].length - 1) {
        uTod = j
        dia = j
        for (let m = 0; m < len; m++) {
          sum1 = sum1 + square[j][uTod]
          sum2 = sum2 + square[uTod][dia]
          dia--

          uTod--
        }
        if (!sum1 == sum2) {
          return false
        }
      } else {
        uTod = 0
        let l = 0
        for (let m = 0; m < len; m++) {
          sum1 = sum1 + square[l][j]
          sum2 = sum2 + square[i][l]
          uTod++
          l++
        }
        if (sum1 != sum2) {
          return false
        }
      }
    }
  }
  return true
}

console.log(isMagicSquare([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
))