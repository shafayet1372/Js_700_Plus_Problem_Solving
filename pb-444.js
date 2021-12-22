/* Puzzle Pieces
Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element 
in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.

Examples
puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]) ➞ true
// 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// Both arrays sum to [5, 5, 5, 5]

puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]) ➞ true

puzzlePieces([1, 2], [-1, -1]) ➞ false

puzzlePieces([9, 8, 7], [7, 8, 9, 10]) ➞ false
Notes
Each array will have at least one element.
Return false if both arrays are of different length. */






function puzzlePieces(a1, a2) {
  if (a1.length != a2.length) {
    return false
  }
  let sum
  for (let i = 0; i < a1.length; i++) {
    if (i == 0) {
      sum = a1[i] + a2[i]
    } else {
      if ((a1[i] + a2[i]) != sum) {
        return false
      }
      sum = a1[i] + a2[i]
    }
  }
  return true
}

console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]))