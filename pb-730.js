/* Abbreviations Unique?
You are given two inputs:

An array of abbreviations.
An array of words.
Write a function that returns true if each abbreviation uniquely identifies a word, and false otherwise.

Examples
uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) ➞ false
// "ho" and "h" are ambiguous and can identify either "house" or "hope"

uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]) ➞ true

uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]) ➞ false

uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]) ➞ true
Notes
Abbreviations will be a substring from [0, n] from the original string. */

function uniqueAbbrev(abbs, words) {
  let result = abbs.map(x => {
    let counter = 0
    words.forEach(y => {
      let val = y.slice(0, x.length)
      if (val == x) {
        counter++
      }
    })
    return counter
  })
  return result.every(val => val == 1)
}

console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]))