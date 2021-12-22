/* Spelling it Out
Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

Examples
spelling("bee") ➞ ["b", "be", "bee"]

spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]

spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
Notes */

function spelling(str) {
  let s = str.split("")
  let result = [], newStr = ''
  for (let i = 0; i < s.length; i++) {
    if (i == 0) {
      newStr = newStr + s[i]
      result.push(s[i])
    } else {
      result.push(newStr + s[i])
      newStr = newStr + s[i]
    }
  }
  return result
}

console.log(spelling("eagerly"))