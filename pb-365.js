/* Chess Board Squares
Create a function that takes a code of chess board square and return his color.

Alternative Text

Examples
chessBoard("a1") ➞ "black"

chessBoard("e5") ➞ "black"

chessBoard("d1") ➞ "white"
Notes

 */
function chessBoard(pole) {
  let ar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  let s = pole.split("")
  let s1 = s[0]
  let s2 = s[1]
  if (ar.indexOf(s1) % 2 == 0) {
    if (parseInt(s2) % 2 == 0) {
      return "white"
    }
    return 'black'
  } else {
    if (parseInt(s2) % 2 == 0) {
      return "black"
    }
    return 'white'
  }
}

console.log(chessBoard('d1'))