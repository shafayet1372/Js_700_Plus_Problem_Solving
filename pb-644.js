/* Are Letters in the Second String Present in the First?
Create a function that accepts an array of two strings and checks if the letters in the second string are present in the first string.

Examples
letterCheck(["trances", "nectar"]) ➞ true

letterCheck(["compadres", "DRAPES"]) ➞ true

letterCheck(["parses", "parsecs"]) ➞ false
Notes
Function should not be case sensitive (as indicated in the second example).
Both strings are presented as a single argument in the form of an array.
Bonus: Solve this without RegEx. */

function letterCheck(arr) {
  let s1 = [...new Set(arr[0].toUpperCase().split(""))]
  let s2 = [...new Set(arr[1].toUpperCase().split(""))]
  let counter = 0
  for (let i = 0; i < s2.length; i++) {
    for (let j = 0; j < s1.length; j++) {
      if (s2[i] == s1[j]) {
        counter++
        break
      }
    }


  }
  return counter == s2.length
}

console.log(letterCheck(["trances", "nectar"]))