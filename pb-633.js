/* First N Vowels
Write a function that returns the first n vowels of a string.

Examples
firstNVowels("sharpening skills", 3) ➞ "aei"

firstNVowels("major league", 5) ➞ "aoeau"

firstNVowels("hostess", 5) ➞ "invalid"
Notes
Return "invalid" if the n exceeds the number of vowels in a string.
Vowels are: a, e, i, o, u
 */

function firstNVowels(s, n) {
  let str = s.split("")
  let counter = 0
  let vowels = ""

  for (let i = 0; i < str.length; i++) {
    if (/[aeiou]/.test(str[i])) {
      vowels += str[i]
      counter++
    }

    if (counter == n) {
      return vowels
    }
  }
  return 'invalid'
}

console.log(firstNVowels("sharpening skills", 3))