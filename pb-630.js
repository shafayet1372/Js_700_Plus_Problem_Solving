/* Check if the String is a Palindrome
A palindrome is a word, phrase, number or other sequence of characters which reads the same backward or forward, such as madam or kayak.

Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean (true or false value).

Examples
isPalindrome("Neuquen") ➞ true

isPalindrome("Not a palindrome") ➞ false

isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!") ➞ true
Notes
Should be case insensitive.
Special characters (punctuation or spaces) should be ignored. */

function isPalindrome(str) {
  let s = str.toLowerCase().split(/[\s\W]/).join("").split("")
  let l = s.length - 1

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] != s[l]) {
      return false
    }
    l--
  }
  return true
}

console.log(isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!"))