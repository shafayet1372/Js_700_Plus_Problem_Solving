/* Converting Objects to Arrays
Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []
Notes
Return an empty array if the object is empty. */


function toArray(obj) {
  let result = []
  for (let v in obj) {
    let g1 = []
    g1[0] = v
    g1[1] = obj[v]
    result.push(g1)
  }
  return result
}

console.log(toArray({ a: 1, b: 2 }))