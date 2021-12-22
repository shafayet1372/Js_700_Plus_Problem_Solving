/* Convert Key, Values in an Object to Array
Write a function that converts an object into an array of keys and values.

Examples
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
Notes
N/A */





function objectToArray(obj) {
  let result = []
  for (let v in obj) {
    let g = []
    g[0] = v
    g[1] = obj[v]
    result.push(g)
  }
  return result
}

console.log(objectToArray({
  D: 1,
  B: 2,
  C: 3
}))