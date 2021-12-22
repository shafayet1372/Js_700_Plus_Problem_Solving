/* Hamming Code
The Hamming Code is used to correct errors in data transmissions. Create a function that takes a string containing the message and returns an encoded message using hamming code.

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

hammingCode("hey") ➞
"000111111000111000000000000111111000000111000111000111111111111000000111"
Step 1: Convert every character to its ASCII value:

h, e, y = 104, 101, 121
Step 2: Convert ASCII values to 8-bit binary:

104, 101, 121 = 01101000, 01100101, 01111001
Step 3: Triple every bit:

01101000, 01100101, 01111001 =

000111111000111000000000, 000111111000000111000111, 000111111111111000000111
Step 4: Concatenate the result:

"000111111000111000000000000111111000000111000111000111111111111000000111"
See the below examples for a better understanding:

Examples
hammingCode("hey") ➞
"000111111000111000000000000111111000000111000111000111111111111000000111"

hammingCode("mubashir") ➞
"0001111110001111110001110001111111110001110001110001111110000000001110000001111110000000000001110001111111110000001111110001111110
00111000000000000111111000111000000111000111111111000000111000"

hammingCode("matt") ➞
"000111111000111111000111000111111000000000000111000111111111000111000000000111111111000111000000"
Notes
N/A */

function hammingCode(message) {
  let s = message.split("")
  let i = 0
  while (i < s.length) {
    let ascval = s[i].charCodeAt(0)
    let quo = Math.floor(ascval / 2)
    let counter=1
    let rem = ((ascval % 2).toString()).repeat(3)
    while (quo != 0) {
      rem = rem + ((quo % 2).toString()).repeat(3)
      quo = Math.floor(quo / 2)
      counter++
    }
    s[i] = '0'.repeat((8-counter)*3) + rem.split("").reverse().join("")

    i++
  }

  return s.join("")
}

console.log(hammingCode("hey"))

let v='111111'