/* Find Number of Repetitions of Substring
Create a function that takes a string as an argument and tells the number of repitions of a substring. It is exactly vice versa to repeating 
a string function (i.e. if a string "k" is given and asked to make a larger string "z" such that "k" is repated "n' times).

In this scenario, we do the opposite. Given the final string, and ask the number of times the substring is repeated.

Examples
numberOfRepeats("abcabcabcabc" ) ➞ 4

numberOfRepeats("bcbcbc") ➞ 3

numberOfRepeats("llbllbllbllbllbllb") ➞ 6

numberOfRepeats("kc") ➞ 1
Notes
Assume that the substring length is always greater than 1.
Assume that the string length is always greater than 1.
Assume that the substring is not always the same */

function numberOfRepeats(str) {
  let counter = 0
  let s = ""
  for (let i = 0; i < str.length; i++) {

    if (s.length > 1 && str.slice(i, i + s.length) == s) {
      counter++
      s = ""
    }
    s += str[i]
  }

  return counter + 1
}

console.log(numberOfRepeats("bcbcbc"))