/* All About Strings

Create a function that, given a string with at least three characters, returns an array of its:

    Length.
    First character.
    Last character.
    Middle character, if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
    Index of the second occurrence of the second character in the format "@ index #" and "not found" if the second character doesn't occur again.

Examples

allAboutStrings("LASA") ➞ [4, "L", "A", "AS", "@ index 3"]

allAboutStrings("Computer") ➞ [8, "C", "r", "pu", "not found"]

allAboutStrings("Science") ➞ [7, "S", "e", "e", "@ index 5"]

Notes

N/A
 */

function allAboutStrings(str) {
  let s = str.split('')
  let len = s.length
  let fChar = s[0]
  let lChar = s[s.length - 1]
  let mChar = s.length % 2 == 1 ? s[Math.floor(s.length / 2)] : s.slice((s.length / 2) - 1, (s.length / 2) + 1).join("")
  let indexOfScndOcr = "not found"
  let index = null
  for (let i = 0; i < s.length; i++) {
    let counter = 0
    for (let j = 0; j < s.length; j++) {
      if (s[i] == s[j]) {
        counter++
        if (counter == 2) {
          index = j
        }
      }
    }
    if (index) {
      break;
    }
  }
  return [len, fChar, lChar, mChar, index ? `@ index ${index}` : indexOfScndOcr]
}

console.log(allAboutStrings("science"))