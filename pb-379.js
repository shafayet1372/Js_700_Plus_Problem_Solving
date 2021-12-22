/* Concatenate Variable Number of Input Arrays
Create a function that concatenates n input arrays, where n is variable.

Examples
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
Notes
Arrays should be concatenated in order of the arguments.
 */

function concat(...args) {
  let result = []
  for (let i = 0; i < args.length; i++) {
    if (args[i].length) {
      for (let j = 0; j < args[i].length; j++) {
        result.push(args[i][j])
      }
    }
  }
  return result
}

console.log(concat([1, 2], [3, 4]))