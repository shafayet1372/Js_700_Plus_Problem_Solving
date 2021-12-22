/* Find the Unique Letters
Create a function that takes a string and returns an array of the letters that occur only once.

Examples
findLetters("monopoly") ➞ ["m", "n", "p", "l", "y"]

findLetters("balloon") ➞ ["b", "a", "n"]

findLetters("analysis") ➞ ["n", "l", "y", "i"]
Notes
The final array should not include letters that appear more than once in the string.
Return the letters in the sequence they were originally in, do not sort them.
All letters will be in lowercase. */

function findLetters(str) {
  let s = str.split("")
  return s.filter(x => {
    let counter = 0
    s.forEach(y => {
      if (x == y) {
        counter++
      }
    })
    return counter == 1
  })
}

console.log(findLetters("monopoly"))