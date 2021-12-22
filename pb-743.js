/* Possible Palindrome
Create a function that determines whether it is possible to build a palindrome from the characters in a string.

Examples
possiblePalindrome("acabbaa") ➞ true
// Can make the following palindrome: "aabcbaa"

possiblePalindrome("aacbdbc") ➞ true
// Can make the following palindrome: "abcdcba"

possiblePalindrome("aacbdb") ➞ false

possiblePalindrome("abacbb") ➞ false
Notes
N/A */

function possiblePalindrome(str) {
  let s = str.split("")
  let unival = [...new Set(s)]
  let counterOdd = 0
  unival.forEach(x => {
    let counter = 0
    s.forEach(y => {
      if (x == y) {
        counter++
      }
    })
    if (counter % 2 == 1) {
      counterOdd++
    }
  })
  return counterOdd <= 1
}

console.log(possiblePalindrome("aacbdb"))