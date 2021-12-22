/* Adding Parity Bits
Parity bits are used as a very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:

If a binary string has an odd number of 1's, the parity bit is a 1.
If a binary string has an even number of 1's, the parity bit is a 0.
The parity bit is appended to the end of the binary string.
Create a function that adds the correct parity bit to a binary string.

Examples
addParityBit("1011011") ➞ "10110111"
// There are five 1's.
// Since five is odd, the parity bit should be a 1.
// Add the parity bit to the end of the string.
// Return the result.

addParityBit("0110000") ➞ "01100000"

addParityBit("0101101") ➞ "01011010"

addParityBit("1111111") ➞ "11111111"
Notes
All inputs will be 7-bits long (so that the parity bit makes it a full byte) */

function addParityBit(b) {
  let s = b.split("")
  let counter = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '1') {
      counter++
    }
  }
  return counter % 2 == 0 ? b + '0' : b + '1'
}

console.log(addParityBit('1011011'))