/* Find the Overlapping Range
For an array of ranges, find the maximum range that is contained in all the ranges. If there is no such range, return "No overlapping".

Examples
overlapping([[1, 7], [2, 8], [0, 4]]) ➞ [2, 4]

overlapping([[5, 10], [2, 15], [10, 12]]) ➞ [10, 10]

overlapping([[11, 18], [3, 7], [2, 20], [5, 16]]) ➞ "No overlapping"
Notes
Both ends are inclusive for all ranges. */

function overlapping(arr) {
  let result = []
  for (let i = arr[0][0]; i <= arr[0][1]; i++) {
    let counter = 0
    for (let j = 0; j < arr.length; j++) {
      let [a, b] = arr[j]

      if (i >= a && i <= b) {
        counter++
      }
    }
    if (counter == arr.length) {
      result.push(i)
    }
  }
  if (!result.length) {
    return 'No overlapping'
  }
  return [result.slice().sort((a, b) => a - b)[0], result.slice().sort((a, b) => b - a)[0]]
}

console.log(overlapping([[11, 18], [3, 7], [2, 20], [5, 16]]))