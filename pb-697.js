/* Censor Words from Array

Create a function that takes a string str and censors any word from a given array arr. The text removed must be replaced by the given character char.
Examples

censorString("Today is a Wednesday!", ["Today", "a"], "-") ➞ "----- is - Wednesday!"

censorString("The cow jumped over the moon.", ["cow", "over"], "*"), "The *** jumped **** the moon.")

censorString("Why did the chicken cross the road?", ["Did", "chicken", "road"], "*") ➞ "Why *** the ******* cross the ****?"

Notes

N/A */

function censorString(str, arr, char) {
  let s = str.split(" ")
  for (let i = 0; i < s.length; i++) {
    if (arr.indexOf(s[i]) >= 0) {
      s[i] = char.repeat(s[i].length)
    }
  }
  return s.join(" ")
}

console.log(censorString("Today is a Wednesday!", ["Today", "a"], "-"))