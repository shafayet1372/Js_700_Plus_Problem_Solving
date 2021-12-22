/* Given two strings, return a string containing only the letters shared between the two.

Examples
sharedLetters("house", "home") ➞ "eho"

sharedLetters("Micky", "mouse") ➞ "m"

sharedLetters("house", "villa") ➞ ""
NotessharedLetters
If none of the letters are shared, return an empty string.
The function should be case insensitive (e.g. comparing A and a should return a).
Sort the resulting string alphabetically before returning it. */






function sharedLetters(str1, str2) {
  let result = []
  let newStr = str1.split("")
  visited = []
  for (let i = 0; i < newStr.length; i++) {
    if (visited.indexOf(newStr[i].toLowerCase()) == -1) {
      let rege = new RegExp(`${newStr[i]}`, 'i')
      if (rege.test(str1) && rege.test(str2)) {
        result.push(newStr[i].toLowerCase())
      }
      visited.push(newStr[i].toLowerCase())
    }

  }
  if (result.length) {
    return result.sort((a, b) => {
      if (a < b) {
        return -1
      }
      if (a > b) {
        return 1
      }
      return 0
    }).join("")
  }
  return ""
}

console.log(sharedLetters('🙂😀😄😁', '🙂😞😔😣'))