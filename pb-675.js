/* Construct and Deconstruct
Given a string, create a function which outputs an array, building and deconstructing the string letter by letter. See the examples below for some helpful guidance.

Examples
constructDeconstruct("Hello") ➞ [
  "H",
  "He",
  "Hel",
  "Hell",
  "Hello",
  "Hell",
  "Hel",
  "He",
  "H"
]

constructDeconstruct("edabit") ➞ [
  "e",
  "ed",
  "eda",
  "edab",
  "edabi",
  "edabit",
  "edabi",
  "edab",
  "eda",
  "ed",
  "e"
]

constructDeconstruct("the sun") ➞ [
  "t",
  "th",
  "the",
  "the ",
  "the s",
  "the su",
  "the sun",
  "the su",
  "the s",
  "the ",
  "the",
  "th",
  "t"
]
Notes
Include spaces (see example #3). */

function constructDeconstruct(str) {
  if(!str){
    return []
  }
  let mid = str.length - 1
  let i = 0
  let result = [], start = 1, end = str.length - 1
  while (i != (str.length * 2) - 1) {
    if (i > mid) {
      result.push(str.slice(0, end--))
    } else {
      result.push(str.slice(0, start++))
    }
    i++
  }
  return result
}

console.log(constructDeconstruct("123456789"))

