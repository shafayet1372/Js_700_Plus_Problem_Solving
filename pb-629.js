/* Extend the Vowels
Create a function that takes a word and extends all vowels by a number num.

Examples
extendVowels("Hello", 5) ➞ "Heeeeeelloooooo"

extendVowels("Edabit", 3) ➞ "EEEEdaaaabiiiit"

extendVowels("Extend", 0) ➞ "Extend"
Notes
Return "invalid" if num is not an integer. */

function extendVowels(word, num) {
  if (parseInt(num) != num || num < 0) {
    return "invalid"
  }
  let s = word.split("")
  return s.map(val => {
    if (/[aeiou]/i.test(val)) {
      return val.repeat(num + 1)
    }
    return val
  }).join("")
}

console.log(extendVowels("Hello", 5))