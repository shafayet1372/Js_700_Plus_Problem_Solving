/* Split and Delimit
Write a function that splits a string into substrings of size n, adding a specified delimiter between each of the pieces.

Examples
splitAndDelimit("bellow", 2, "&") ➞ "be&ll&ow"

splitAndDelimit("magnify", 3, ":") ➞ "mag:nif:y"

splitAndDelimit("poisonous", 2, "~") ➞ "po~is~on~ou~s"
Notes
N/A
 */

function splitAndDelimit(str, num, del) {
  let result = []

  for (let i = 0; i < str.length; i += num) {
    let val = str.slice(i, i + num)
    result.push(val)
  }
  return result.join(del)
}

console.log(splitAndDelimit("magnify", 3, ":"))