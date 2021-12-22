/* Return the Index of All Capital Letters
Create a function that takes a single string as argument and returns an ordered array containing the indices of all capital letters in the string.

Examples
indexOfCaps("eDaBiT") ➞ [1, 3, 5]

indexOfCaps("eQuINoX") ➞ [1, 3, 4, 6]

indexOfCaps("determine") ➞ []

indexOfCaps("STRIKE") ➞ [0, 1, 2, 3, 4, 5]

indexOfCaps("sUn") ➞ [1]
Notes
Return an empty array if no uppercase letters are found in the string.
Special characters ($#@%) and numbers will be included in some test cases.
Assume all words do not have duplicate letters. */


function indexOfCaps(str) {
  let s = str.split("")
  let index = []
  for (let i = 0; i < s.length; i++) {
    if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=92) {
      index.push(i)
    }
  }
  return index
}

console.log(indexOfCaps("eDaBiT"))