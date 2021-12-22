/* The Conquering Queen

In chess, queens can move any number of squares horizontally, vertically or diagonally.

Given the location of your queen and your opponents' queen, determine whether or not you're able to capture your opponent's queen. 
Your location and your opponents' location are the first and second elements of the array, respectively.
Examples

canCapture(["A1", "H8"]) ➞ true
// Your queen can move diagonally to capture opponents' piece.

canCapture(["A1", "C2"]) ➞ false
// Your queen cannot reach C2 from A1 (although a knight could).

canCapture(["G3", "E5"]) ➞ true

Notes

Assume there are no blocking pieces.
 */

function canCapture([myQueen, opponentsQueen]) {
  let myQ = myQueen.split("")
  let opQ = opponentsQueen.split("")
  if ((myQ[0] == opQ[0]) || (myQ[1] == opQ[1])) {
    return true
  }

  if (Math.abs(myQueen.charCodeAt(myQ[0]) - opponentsQueen.charCodeAt(opQ[0])) == Math.abs(parseInt(myQ[1]) - parseInt(opQ[1]))) {
    return true
  }
  return false
}

console.log(canCapture(["A5", "E2"]))