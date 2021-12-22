/* Crypto Wars: Missing Number
Our fleet managed to get one of the enemy's top-secret codes from the remains of its fallen ship. The codes were immediately sent over
 to our code-breaking base over at Bleckley Park ;) for analysis. The team found that each code contains 25 numbers with one missing. The missing
 number corresponds to a letter in the English alphabet. Your job is to find a more efficient Method of decrypting the messages by digitizing the process.

Write a function that takes an array, detects the missing number (in the array), and returns its corresponding letter.

Examples
decrypt([19, 12, 14, 21, 22, 3, 11, 20, 9, 16, 24, 17, 2, 10, 13, 18, 7, 8, 4, 5, 1, 6, 25, 23, 26]) ➞ "O"
// The missing number is 15.

decrypt([24, 12, 2, ..., 25]) ➞ "N"
// The missing number is 14.

decrypt([24, 12, 2, ..., 25]) ➞ "P"
// The missing number is 16.
Notes
The array will only contain positive integers from 1 to 26 with one missing.
There will be no duplicate numbers.
Return the capital letter. */


function decrypt(arr) {
  let SortedCode = arr.slice().sort((a, b) => a - b)

  for (let i = 1; i < SortedCode.length; i++) {
    if ((SortedCode[i] - 1) != SortedCode[i - 1]) {
      return String.fromCharCode(96 + SortedCode[i] - 1).toUpperCase()
    }
  }
}

console.log(decrypt([19, 12, 14, 21, 22, 3, 11, 20, 9, 16, 24, 17, 2, 10, 13, 18, 7, 8, 4, 5, 1, 6, 25, 23, 26]))