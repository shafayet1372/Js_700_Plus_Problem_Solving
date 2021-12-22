/* Replacing Letters with Hashes
Write a function that replaces all letters within a specified range with the hash symbol #.

Examples
replace("abcdef", "c-e") ➞ "ab###f"

replace("rattle", "r-z") ➞ "#a##le"

replace("microscopic", "i-i") ➞ "m#croscop#c"

replace("", "a-z") ➞ ""
Notes
The range will always be in order, a.k.a. for m-n, character m will always come before or equal n.
Strings will be in lower case letters only.
Return an empty string if the input is an empty string. */

function replace(str, r) {
  let range = r.split("")
  let first = range[0]
  let last = range[range.length - 1]
  let s = str.split("")
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) >= first.charCodeAt(0) && s[i].charCodeAt(0) <= last.charCodeAt(0)) {
      s[i] = "#"
    }
  }
  return s.join("")
}

console.log(replace("abcdef", "c-e"))