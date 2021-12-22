/* Array Multiplier
Create a function that takes an array as an argument and returns a new nested array for each element in the original array.
 The nested array must be filled with the corresponding element (string or number) in the original array and each nested array has the same amount of elements as the original array.

Examples
multiply([4, 5]) ➞ [[4, 4], [5, 5]]

multiply(["*", "%", "$"]) ➞ [["*", "*", "*"], ["%", "%", "%"], ["$", "$", "$"]]

multiply(["A", "B", "C", "D", "E"]) ➞ [["A", "A", "A", "A", "A"], ["B", "B", "B", "B", "B"], ["C", "C", "C", "C", "C"],
 ["D", "D", "D", "D", "D"], ["E", "E", "E", "E", "E"]]
Notes
The given array contains numbers or strings. */


function multiply(arr) {
  /* 
  //shortway
  return arr.map(x => arr.map(y => x)) */
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let group = []
    for (let j = 0; j < arr.length; j++) {
      group.push(arr[i])
    }
    result.push(group)
  }
  return result
}

console.log(multiply([4, 5]))