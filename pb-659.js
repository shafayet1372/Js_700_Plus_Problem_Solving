/* Complete the Binary Number
Create a function which adds zeros to the start of a binary string, so that its length is a mutiple of 8.

Examples
completeBinary("1100") ➞ "00001100"

completeBinary("1101100") ➞ "01101100"

completeBinary("110010100010") ➞ "0000110010100010"
Notes
Return the same string if its length is already a multiple of 8. */

function completeBinary(str) {
  if (str.length%8==0) {
    return str
  }


  let len = str.length < 8 ? 8 - str.length : (Math.floor(str.length / 8) + 1) * 8 - str.length
  return '0'.repeat(len) + str
}

console.log(completeBinary("110010100010"))