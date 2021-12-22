/* Vowel to Vowel Links
Given a sentence as str, return true if any two adjacent words have this property: One word ends with a vowel, while the word immediately after begins with a vowel (a e i o u).

Examples
vowelLinks("a very large appliance") ➞ true

vowelLinks("go to edabit") ➞ true

vowelLinks("an open fire") ➞ false

vowelLinks("a sudden applause") ➞ false
Notes
You can expect sentences in lowercase/uppercase. */

function vowelLinks(str) {
  let s = str.split(" ")
  let regex = /[aeiuo]/i
  return s.some((x, i, arr) => regex.test(arr[i].charAt(x.length - 1)) && arr[i + 1] && regex.test(arr[i + 1].charAt(0)))
}

console.log(vowelLinks("an open fire"))