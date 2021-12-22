/* Sort a String by Its Last Character
Create a function that takes a string of words and return a string sorted alphabetically by the last character of each word.

Examples
sortByLast("herb camera dynamic") ➞ "camera herb dynamic"

sortByLast("stab traction artist approach") ➞ "stab approach traction artist"

sortByLast("sample partner autonomy swallow trend") ➞ "trend sample partner swallow autonomy"
Notes
Tests consist of lowercase alphabetic characters (a-z) and spaces.
If two words have the same last character, sort by the order they originally appeared. */

function sortByLast(str) {


  /* 
  //shortway
  return str.split(" ").sort((a, b) => {
    return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  }).join(" ") */
  let s = str.split(" ")
  let s1 = str.split(" ")
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {

      if (s[i].charCodeAt(s[i].length - 1) > s[j].charCodeAt(s[j].length - 1)) {
        let swap = s[i]
        s[i] = s[j]
        s[j] = swap
      } else if (s[i].charCodeAt(s[i].length - 1) == s[j].charCodeAt(s[j].length - 1)) {

        if (s1.indexOf(s[i]) > s1.indexOf(s[j])) {
          let swap = s[i]
          s[i] = s[j]
          s[j] = swap

        }
      }
    }

  }

  return s.join(" ")
}

console.log(sortByLast("brick moral institution loud talk resign worth"))