/* Cycling Through Strings
Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.

Examples
stringCycling("abc", "hello") ➞ "abcab"

stringCycling("programming", "edabit") ➞ "progra"

stringCycling("the world in me evolves in hers", "i love Tesh, so much so") ➞ "the world in me evolves"

stringCycling("a thing of beauty is a joy forever", "indulge me surely") ➞ "a thing of beauty"

stringCycling("to", "hide") ➞ "toto"

stringCycling("such a feeling coming over me", "top of the world") ➞ "such a feeling c"
Notes
All tests will include valid strings. */

function stringCycling(a, b) {
  let str = a.split("")
  let s = ""
  let i = 0
  while (s.length != b.length) {

    if (i == str.length) {
      i = 0
    }
    s += str[i]

    i++
  }
  return s
}

console.log(stringCycling("abc", "hello"))