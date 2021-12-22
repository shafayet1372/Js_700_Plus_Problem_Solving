/* The Perrin Sequence
Each number in the Perrin sequence is created by summing the numbers two positions and three positions before it. The first three numbers are 
(3, 0, 2), and the sequence is extended as follows:

P(0) P(1) P(2) P(3) P(4) P(5) P(6) P(7) ... P(n)
3, 0, 2, 3, 2, 5, 5, 7, ...
Given a value for n, return the Perrin number P(n).

Examples
perrin(1) ➞ 0

perrin(8) ➞ 10

perrin(26) ➞ 1497
Notes
Check the Resources tab for a further explanation of the Perrin sequence. */

function perrin(n) {
  if (n == 0) {
    return 1
  } else if (n == 1) {
    return 0
  } else if (n == 2) {
    return 2
  }
  let first = 3
  let second = 0
  let third = 2

  for (let i = 1; i < n - 1; i++) {
    sum = first + second
    first = second
    second = third
    third = sum

  }
  return sum

}

console.log(perrin(20))