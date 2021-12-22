/* Same ASCII?
Return true if the sum of ASCII values of the first string is same as the sum of ASCII values of the second string, otherwise return false.

Examples
sameAscii("a", "a") ➞ true

sameAscii("AA", "B@") ➞ true

sameAscii("EdAbIt", "EDABIT") ➞ false
Notes
If you need some help with ASCII codes, check the Resources tab for an image of all ASCII codes used in this challenge. */

function sameAscii(a, b) {
  let s1 = a.split("").reduce((acc, val) => { return acc += val.charCodeAt(0) }, 0)
  let s2 = b.split("").reduce((acc, val) => { return acc += val.charCodeAt(0) }, 0)
  return s1 == s2
}

console.log(sameAscii("AA", "B@"))