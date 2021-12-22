/* Switcharoo
Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

If the length of the string is less than two, return "Incompatible.".
If the argument is not a string, return "Incompatible.".
If the first and last characters are the same, return "Two's a pair.".
Examples
flipEndChars("Cat, dog, and mouse.") ➞ ".at, dog, and mouseC"

flipEndChars("ada") ➞ "Two's a pair."

flipEndChars("Ada") ➞ "adA"

flipEndChars("z") ➞ "Incompatible."

flipEndChars([1, 2, 3]) ➞ "Incompatible."
Notes
Tests are case sensitive (e.g. "A" and "a" are not the same character).
 */





function flipEndChars(str) {
  if (str.length < 2) {
    return "Incompatible."
  }
  if (typeof str != 'string') {
    return "Incompatible."
  }
  let s = str.split("")
  let firstChar = s[0]
  let lastChar = s[s.length - 1]
  if (firstChar != lastChar) {
    s[0] = lastChar
    s[s.length - 1] = firstChar
    return s.join("")
  } else {
    return "Two\'s a pair."
  }
}

console.log(flipEndChars("Cat, dog, and mouse."))