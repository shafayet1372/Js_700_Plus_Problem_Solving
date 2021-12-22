/* Doubleton Number
Mubashir was reading about Doubleton Numbers on Wikipedia.

A natural number is a "Doubleton Number", if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 114455 are not.

Create a function which takes a number n and finds the next doubleton number.

Examples
doubleton(10) ➞ 12
// 12 has only two distinct numbers 1 and 2

doubleton(120) ➞ 121
// 121 has only two distinct numbers 1 and 2

doubleton(1234) ➞ 1311
// 1311 has only two distinct numbers 1 and 3
Notes
N/A */




function doubleton(n) {
  let i = 0
  while (true) {
    n++
    let num = n.toString().split(""), Uniar = []
    let m = 0
    while (m < num.length) {
      if (Uniar.indexOf(num[m]) == -1) {
        Uniar.push(num[m])
      }
      m++
    }

    if (Uniar.length == 2) {
      return n
    }

  }
}

console.log(doubleton(1434))