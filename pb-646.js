/* Stretched Words
Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.

Examples
unstretch("ppoeemm") ➞ "poem"

unstretch("wiiiinnnnd") ➞ "wind"

unstretch("ttiiitllleeee") ➞ "title"

unstretch("cccccaaarrrbbonnnnn") ➞ "carbon"
Notes
Final strings won't include words with double letters (e.g. "passing", "lottery").
 */
function unstretch(word) {

  let s = word.split("")
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      s.splice(i + 1, 1)
      i--
    }
  }
  return s.join("")
}

console.log(unstretch("wiiiinnnnd"))