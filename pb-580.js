/* Xs and Os, Nobody Knows
Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

Return a boolean value (true or false).
Return true if the amount of x's and o's are the same.
Return false if they aren't the same amount.
The string can contain any character.
When "x" and "o" are not in the string, return true.
Examples
XO("ooxx") ➞ true

XO("xooxx") ➞ false

XO("ooxXm") ➞ true
// Case insensitive.

XO("zpzpzpp") ➞ true
// Returns true if no x and o.

XO("zzoo") ➞ false
Notes
Remember to return true if there aren't any x's or o's.
Must be case insensitive. */

function XO(str) {
  let s = str.toLowerCase().split("")
  let counterx = 0, counter0 = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'x') {
      counterx++
    } else if (s[i] == 'o') {
      counter0++
    }
  }
  if (!counter0 && !counterx) {
    return true
  } else {
    return counter0 == counterx
  }
}

console.log(XO("ooxx"))