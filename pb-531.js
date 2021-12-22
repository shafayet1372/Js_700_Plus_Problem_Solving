/* N-Sized Parts
Create a function that divides a string into parts of size n.

Examples
partition("chew", 2) ➞ ["ch", "ew"]

partition("thematic", 4) ➞ ["them", "atic"]

partition("c++", 2) ➞ ["c+", "+"]
Notes
For inputs that do not split evenly into parts of size n, the last element in the array will have a "leftover" string (see example #3). */

function partition(str, n) {
  let s = str.split('')
  let result = []
  for (let i = 0; i < s.length; i += n) {
    result.push(s.slice(i, i + n).join(""))
  }
  return result
}

console.log(partition("python", 2))