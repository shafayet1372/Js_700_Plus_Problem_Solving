/* The DECIMATOR
Write a DECIMATOR function which takes a string and decimates it (i.e. it removes the last 1/10 of the characters).

Always round up: if the string has 21 characters, 1/10 of the characters would be 2.1 characters, hence the DECIMATOR removes 3 characters. The DECIMATOR shows no mercy!

Examples
DECIMATOR("1234567890") ➞ "123456789"
// 10 characters, removed 1.

DECIMATOR("1234567890AB") ➞ "1234567890"
// 12 characters, removed 2.

DECIMATOR("123") ➞ "12"
// 3 characters, removed 1.

DECIMATOR("123456789012345678901") ➞ "123456789012345678"
// 21 characters, removed 3.
Notes
Make sure to remove characters from the end of the strin
 */

function DECIMATOR(str) {
  let amount = Math.ceil(str.length / 10)
  return str.substr(0, str.length - amount)
}

console.log(DECIMATOR("123"))