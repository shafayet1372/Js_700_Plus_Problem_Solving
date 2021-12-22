
/* Kaprekar Numbers
A Kaprekar Number is a positive integer that is equal to a number formed by first squaring, then splitting and summing its two lexicographical parts:

If the quantity of digits of the squared number is even, the left and right parts will have the same length.
If the quantity of digits of the squared number is odd, then the right part will be the longer half, with the left part being the shorter or equal to zero 
if the quantity of digits is equal to 1.
Given a positive integer n implement a function that returns true if it's a Kaprekar number, and false if it's not.

Examples
isKaprekar(3) ➞ false
// n² = "9"
// Left + Right = 0 + 9 = 9 ➞ 9 !== 3

isKaprekar(5) ➞ false
// n² = "25"
// Left + Right = 2 + 5 = 7 ➞ 7 !== 5

isKaprekar(297) ➞ true
// n² = "88209"
// Left + Right = 88 + 209 = 297 ➞ 297 === 297
Notes
Trivially, 0 and 1 are Kaprekar Numbers being the only two numbers equal to their square. Any number formed only by digits equal to 9 will always be a Kaprekar Number. */

function isKaprekar(n) {
  if (n == 0 || n == 1) {
    return true
  }
  let sqr = Math.pow(n, 2).toString().split("")

  let left, right
  if (sqr.length % 2 == 0) {
    left = parseInt(sqr.slice(0, sqr.length / 2).join(""))
    right = parseInt(sqr.slice(sqr.length / 2, sqr.length).join(''))
  } else {
    left = parseInt(sqr.slice(0, Math.floor(sqr.length / 2)).join(""))
    right = parseInt(sqr.slice(Math.floor(sqr.length / 2), sqr.length).join(""))
    console.log(left, right)
  }

  return left + right == n
}

console.log(isKaprekar(1))