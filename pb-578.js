/* Remove the Letters ABC
Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. 
If the given string does not contain "a", "b", or "c", return null.

Examples
removeABC("This might be a bit hard") ➞ "This might e  it hrd"

removeABC("hello world!") ➞ null

removeABC("") ➞ null
Notes
If the given string does not contain "a", "b", or "c", return null. */

function removeABC(str) {
  let modifiedAr = []
  let ch = ['a', 'b', 'c']
  let s = str.split("")
  let counter = 0
  for (let i = 0; i < s.length; i++) {
    if (ch.indexOf(s[i]) == -1) {
      modifiedAr.push(s[i])
    } else {
      counter++
    }
  }
  if (counter) {
    return modifiedAr.join("")
  }
  return null
}

console.log(removeABC("This might be a bit hard"))