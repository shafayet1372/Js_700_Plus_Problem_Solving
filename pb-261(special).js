/* Isomorphic Strings
Given two strings s and t, create a function to determine if they are isomorphic. Two strings are isomorphic if the characters in s can be replaced 
to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map 
to the same character but a character may map to itself.

Examples
isIsomorphic("egg", "add") ➞ true

isIsomorphic("aba", "baa") ➞ false

isIsomorphic("paper", "title") ➞ true
Notes
Use either string s or t as your mapping reference. */






function isIsomorphic(s, t) {
  let first = [], second = []
  s = s.split("")
  t = t.split("")
  let index
  for (let i = 0; i < s.length; i++) {
    if (first.indexOf(s[i]) == -1) {
      index = second.indexOf(t[i])
      if (index >= 0) {
        if (first[index] != s[i]) {
          return false
        }
      } else {
        first.push(s[i])
        second.push(t[i])
      }
    } else {
      index = first.indexOf(s[i])
      if (!(second[index] == t[i])) {
        return false
      }
    }

  }

  return true
}

console.log(isIsomorphic("approximate", "tooxaezptom"))