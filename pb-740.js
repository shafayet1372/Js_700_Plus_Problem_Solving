/* Almost Palindrome
A string is an almost - palindrome if, by changing only one character, you can make it a palindrome.Create a function that returns true 
if a string is an almost - palindrome and false otherwise.

  Examples
almostPalindrome("abcdcbg") ➞ true
// Transformed to "abcdcba" by changing "g" to "a".

almostPalindrome("abccia") ➞ true
// Transformed to "abccba" by changing "i" to "b".

almostPalindrome("abcdaaa") ➞ false
// Can't be transformed to a palindrome in exactly 1 turn.

almostPalindrome("1234312") ➞ false
Notes
Return false if the string is already a palindrom */

function almostPalindrome(str) {
  if (str == str.split("").reverse().join("")) {
    return false
  }
  let s = str.split("")
  let l = s.length - 1
  for (let i = 0; i < s.length; i++) {
    if (s[l] != s[i]) {
      s[l] = s[i]
      return s.join("") == s.reverse().join("")
    }
    l--

  }
}

console.log(almostPalindrome("abcdaaa"))