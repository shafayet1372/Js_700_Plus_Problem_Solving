/* Find the First Non-Repeated Character

Create a function that accepts a string as an argument and returns the first non-repeated character.
Examples

firstNonRepeatedCharacter("g") ➞ "g"

firstNonRepeatedCharacter("it was then the frothy word met the round night") ➞ "a"

firstNonRepeatedCharacter("the quick brown fox jumps then quickly blows air") ➞ "f"

firstNonRepeatedCharacter("hheelloo") ➞ false

firstNonRepeatedCharacter("") ➞ false

Notes

    An empty string should return false.
    If every character repeats, return false.
    Don't worry about case sensitivity or non-alphanumeric characters. */


function firstNonRepeatedCharacter(str) {
  let s = str.split("")
  let visited = []
  for (let i = 0; i < s.length; i++) {
    let val = s[i]
    if (!s.slice(i + 1, s.length).join("").includes(val) && visited.indexOf(s[i]) == -1) {
      return s[i]
    } else {
      visited.push(s[i])
    }
  }
  return false
}

console.log(firstNonRepeatedCharacter("g"))