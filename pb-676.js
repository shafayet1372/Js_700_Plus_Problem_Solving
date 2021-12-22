/* Split String by Identical Characters
Create a function that splits a string into an array of identical clusters.

Examples
splitGroups("555") ➞ ["555"]

splitGroups("5556667788") ➞ ["555", "666", "77", "88"]

splitGroups("aaabbbaabbab") ➞ ["aaa", "bbb", "aa", "bb", "a", "b"]

splitGroups("abbbcc88999&&!!!_") ➞ ["a", "bbb", "cc", "88", "999", "&&", "!!!", "_"]
Notes
Each cluster should only have one unique character.
The resulting array should be in the same order as the input string.
Should work with letters, numbers and other characters. */


function splitGroups(str) {
  let s = str.split("")
  let result = []
  let newStr = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      newStr = newStr + s[i] 
    } else {
      result.push(newStr+s[i])
      newStr = ''

    }
  }
  return result
}

console.log(splitGroups("5556667788"))