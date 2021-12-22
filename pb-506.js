/* Index Filtering
Create a function that takes two inputs: idx (an array of integers) and str (a string). The function should return another string with 
the letters of str at each index in idx in order.

Examples
indexFilter([7, -1, 5, 1], "She is the love of my love") ➞ "tesh"

indexFilter([4, -7, -13, -11, -2, 0], "Relax and stay calm to avoid failures") ➞ "xavier"

indexFilter([9, -9, 2, 27, 36, 6, 5, 13, -1, 2, 0, 30, 2], "That's life, I've got you under my skin") ➞ "frank sinatra"
Notes
Indexes may not be in order or may be negative (see examples).
The output string must always be lowercase, but the input str may not be (as in the above examples). */



function indexFilter(idx, str) {
  let result = []
  let s = str.split("")
  for (let i = 0; i < idx.length; i++) {
    if (idx[i] >= 0) {
      result.push(s[idx[i]])
    } else {
      result.push(s[s.length - (idx[i] * (-1))])
    }
  }
  return result.join("").toLowerCase()
}

console.log(indexFilter([4, -7, -13, -11, -2, 0], "Relax and stay calm to avoid failures"))