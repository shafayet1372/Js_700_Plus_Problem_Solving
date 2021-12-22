/* Compounding Letters
Create a function that takes a string and returns a new string with each new character accumulating by +1. Separate each set with a dash.

Examples
accum("abcd") ➞ "A-Bb-Ccc-Dddd"

accum("RqaEzty") ➞ "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

accum("cwAt") ➞ "C-Ww-Aaa-Tttt"
Notes
Capitalize the first letter of each set.
All tests contain valid strings with alphabetic characters (a-z, A-Z). */

function accum(str) {
  let s = str.split("")
  let result = []
  let counter = 1
  for (let i = 0; i < s.length; i++) {
    let val = s[i].repeat(counter).toLowerCase().split("")

    val[0] = val[0].toUpperCase()
    result.push(val.join(""))
    counter++
  }
  return result.join("-")
}

console.log(accum("RqaEzty"))