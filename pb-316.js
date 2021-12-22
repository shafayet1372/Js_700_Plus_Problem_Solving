/* Hashes and Pluses
Create a function that returns the number of hashes and pluses in a string.

Examples
hashPlusCount("###+") ➞ [3, 1]

hashPlusCount("##+++#") ➞ [3, 3]

hashPlusCount("#+++#+#++#") ➞ [4, 6]

hashPlusCount("") ➞ [0, 0]
Notes
Return [0, 0] for an empty string.
Return in the order of [hashes, pluses].
 */
function hashPlusCount(str) {
  let result = [0, 0]
  let s = str.split("")
  let hasregx = new RegExp("#", 'g')
  let plusregx = new RegExp("\\+", 'g')
  for (let i = 0; i < 2; i++) {
    if (s[i] == '#' && i == 0) {
      result[0] = str.match(hasregx) ? str.match(hasregx).length : 0
    } else {
      result[1] = str.match(plusregx) ? str.match(plusregx).length : 0
    }

  }
  return result
}

console.log(hashPlusCount("###+"))