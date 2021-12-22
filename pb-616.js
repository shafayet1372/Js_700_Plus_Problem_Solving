/* Alternating Ones and Zeroes
Write a function that returns true if the binary string can be rearranged to form a string of alternating 0s and 1s.

Examples
canAlternate("0001111") ➞ true
// Can make: "1010101"

canAlternate("01001") ➞ true
// Can make: "01010"

canAlternate("010001") ➞ false

canAlternate("1111") ➞ false
Notes
No substring of the output may contain more than one consecutive repeating character (e.g. 00 or 11 are not allowed).
Return false if a string only contains 0s or only contains 1s. */



function canAlternate(s) {

  if ([...new Set(s.match(/[0-1]/g))].length == 1) {
    return false
  }
  let zeros = s.match(/[0]/g).length
  let ones = s.match(/[1]/g).length
  if ((zeros == ones) || (zeros == ones - 1) || (ones == zeros - 1)) {
    return true
  }
  return false
}

console.log(canAlternate("1111"))