/* Repeat the Shorter String
Write a function that repeats the shorter string until it is equal to the length of the longer string.

Examples
lengthen("abcdefg", "ab") ➞ "abababa"

lengthen("ingenius", "forest") ➞ "forestfo"

lengthen("clap", "skipping") ➞ "clapclap"
Notes
Both strings will differ in length.
Both strings will contain at least one character.
Either of the two strings could be the shortest in length. */

function lengthen(s1, s2) {
  let len = s1.length > s2.length ? s1.length : s2.length
  let str = s1.length > s2.length ? s2 : s1
  let s = ''
  let l = 0
  while (s.length != len) {
    s += str[l]
    l++
    if (l > str.length - 1) {
      l = 0
    }
  }
  return s
}

console.log(lengthen("abcdefg", "ab"))