/* Capitalize the Last Letter
Create a function that capitalizes the last letter of every word.

Examples
capLast("hello") ➞ "hellO"

capLast("My Name Is Edabit") ➞ "MY NamE IS EdabiT"

capLast("HELp THe LASt LETTERs CAPITALISe") ➞ "HELP THE LAST LETTERS CAPITALISE"
Notes
There won't be any cases of punctuation in the tests */

function capLast(txt) {
  let s = txt.split(" ")
  for (let i = 0; i < s.length; i++) {
    let val = s[i].split("")
    val[val.length - 1] = val[val.length - 1].toUpperCase()
    s[i] = val.join("")
  }

  return s.join(" ")
}

console.log(capLast("My Name Is Edabit"))