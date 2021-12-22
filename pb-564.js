/* Triple Letter Groupings

Given a string, return a sorted array of words formed from the first three letters, then the next three letters, shifting by only one.
Worked Example

threeLetterCollection("edabit") ➞ ["abi", "bit", "dab", "eda"]
// 1st word: "eda"
// 2nd word: "dab"
// 3rd word: "abi"
// 4th word: "bit"
// Remember to sort the array!

Examples

threeLetterCollection("slap") ➞ ["lap", "sla"]

threeLetterCollection("click") ➞ ["cli", "ick", "lic"]

threeLetterCollection("cat") ➞ ["cat"]

threeLetterCollection("hi") ➞ []

Notes

Return an empty array if given a word with less than 3 letters. */



function threeLetterCollection(s) {
  if (s.length < 3) {
    return []
  }
  let result = []
  let str = s.split("")
  for (let i = 0; i < str.length; i++) {
    if ((str[i + 2]) != undefined) {
      result.push(str.slice(i, i + 3).join(""))

    }
  }
  return result.sort((a, b) => {
    let a1 = a.charCodeAt(0)
    let b1 = b.charCodeAt(0)
    if (a1 == b1) {
      let index
      for (let i = 0; i < a.length > b.length ? a.length : b.length; i++) {
        if (a.charCodeAt(i) != b.charCodeAt(i)) {
          index = i
          break
        }
      }
      a1 = a.charCodeAt(index)
      b1 = b.charCodeAt(index)
    }
    return a1 - b1
  })
}

console.log(threeLetterCollection('assassination'))