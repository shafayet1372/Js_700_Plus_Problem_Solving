/* Reverse Words Starting With a Particular Letter
Write a function that reverses all the words in a sentence that start with a particular letter.

Examples
specialReverse("word searches are super fun", "s")
➞ "word sehcraes are repus fun"

specialReverse("first man to walk on the moon", "m")
➞ "first nam to walk on the noom"

specialReverse("peter piper picked pickled peppers", "p")
➞ "retep repip dekcip delkcip sreppep"
Notes
Reverse the words themselves, not the entire sentence.
All characters in the sentence will be in lower case. */

function specialReverse(s, c) {
  let str = s.split(" ")
  for (let i = 0; i < str.length; i++) {
    let val = str[i].split("")
    if (val[0] == c) {
      str[i] = val.reverse().join("")
    }
  }
  return str.join(" ")
}

console.log(specialReverse("word searches are super fun", "s"))