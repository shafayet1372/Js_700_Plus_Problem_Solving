/* Single Occurrence
Create a function that, given a string str, finds a letter that has a single occurrence. Return the letter in uppercase. If the input is empty, return an empty string "".

Examples
singleOccurrence("EFFEAABbc") ➞ "C"

singleOccurrence("AAAAVNNNNSS") ➞ "V"

singleOccurrence("S") ➞ "S"
Notes
The function will not be case sensitive.
 */

function singleOccurrence(str) {
  let s = str.toLowerCase().split("")

  for (let i = 0; i < s.length; i++) {
    let counter = 0
    for (let j = 0; j < s.length; j++) {
      if (s[i] == s[j]) {
        counter++
      }
    }
    if (counter == 1) {
      return s[i].toUpperCase()
    }
  }
  return  ''
}

console.log(singleOccurrence("EFFEAABbc"))