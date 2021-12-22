/* Is One String in the Other?
Create a function that takes two strings and returns true if either of the strings appears at the very end of the other string. Return 
false otherwise. The character * is a wildcard, so it can take the place of any character.

Examples
overlap("ABC", "Ican'tsingmyABC") ➞ true

overlap("abc", "Ican'tsingmyABC") ➞ true

overlap("Ican'tsingmyABC", "abc") ➞ true

overlap("hello world", "hello") ➞ false

overlap("+=", "this should work too +=") ➞ true

overlap("hey", "*********") ➞ true
Notes
Your function should NOT be case sensitive (see example #2).
 */





function overlap(str1, str2) {
  let cmpStr, cmpstr2
  if (str1.length > str2.length) {
    cmpStr = str1.split('').slice(str1.length - str2.length, str1.length)
    cmpstr2 = str2.split("")
  } else {
    cmpStr = str2.split('').slice(str2.length - str1.length, str2.length)
    cmpstr2 = str1.split("")
  }
  return cmpStr.every((val, i) => {
    if (val.toLowerCase() == cmpstr2[i].toLowerCase() || val == "*" || cmpstr2[i] == '*') {
      return true
    } else {
      return false
    }
  })
}

console.log(overlap("ab", "Ican'tsingmy**c"))