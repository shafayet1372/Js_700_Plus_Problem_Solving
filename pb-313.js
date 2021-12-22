/* Return the Index of the First Vowel
Create a function that returns the index of the first vowel in a string.

Examples
firstVowel("apple") ➞ 0

firstVowel("hello") ➞ 1

firstVowel("STRAWBERRY") ➞ 3

firstVowel("pInEaPPLe") ➞ 1
Notes
Input will be single words.
Characters in words will be upper or lower case.
"y" is not considered a vowel.
Input always contains a vowel. */


function firstVowel(str) {
  let s = str.split(""), vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i].toLowerCase()) >= 0) {
      return i
    }
  }
  return s.join("")
}

console.log(firstVowel("apple"))