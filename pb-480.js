/* Count the Number of Duplicate Characters
Create a function that returns the amount of duplicate characters in a string. It will be case sensitive and spaces are included. 
If there are no duplicates, return 0.

Examples
duplicates("Hello World!") ➞ 3
// "o" = 2, "l" = 3.
// "o" is duplicated 1 extra time and "l" is duplicated 2 extra times.
// Hence 1 + 2 = 3

duplicates("foobar") ➞ 1

duplicates("helicopter") ➞ 1

duplicates("birthday") ➞ 0
// If there are no duplicates, return 0
Notes
Make sure to only start counting the second time a character appears.
 */

function duplicates(str) {
  let sum = 0
  let s = str.split("")
  let visited = []
  for (let i = 0; i < s.length; i++) {
    let counter = 0
    if (visited.indexOf(s[i]) == -1) {
      for (let j = 0; j < s.length; j++) {
        if (s[i] == s[j]) {
          counter++
        }
      }
      visited.push(s[i])
    }
    if (counter >= 2) {
      sum += counter - 1
    }

  }
  return sum
}
console.log(duplicates("Hello World!"))