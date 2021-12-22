/* Verbed Nouns
Create a function that ends the first word of a phrase with "ed", essentially verbifying a noun.

Examples
verbify("cheese burger") ➞ "cheesed burger"

verbify("salt water") ➞ "salted water"

verbify("orange juice") ➞ "oranged juice"

verbify("shredded cheese") ➞ "shredded cheese"
Notes
Change only the first word.
Note that some words may already end in "e" or "ed".
All phrases will be in lowercase. */

function verbify(str) {
  let strs = str.split(" ")
  let s = str.split(" ")[0].split("")

  if (s[s.length - 1] == 'd' && s[s.length - 2] == 'e') {
    return str
  } else if (s[s.length - 1] == 'e') {
    s[s.length] = 'd'
    strs[0] = s.join("")
    return strs.join(" ")
  } else if (s[s.length - 1] == 'd') {
    s[s.length] = 'e'
    strs[0] = s.join("")
    return strs.join(" ")
  }
  s[s.length] = 'ed'
  strs[0] = s.join("")
  return strs.join(" ")
}

console.log(verbify("bean toast"))