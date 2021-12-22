/* Repeating Letters
Create a function that takes a string and returns a string in which each character is repeated once.

Examples
doubleChar("String") ➞ "SSttrriinngg"

doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") ➞ "11223344!!__  "
Notes
All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.

 */
function doubleChar(str) {
  let s = str.split("")

  let result = []
  for (let i = 0; i < s.length; i++) {
    result.push(s[i] + s[i])
  }
  return result.join("")
}

console.log(doubleChar("String"))