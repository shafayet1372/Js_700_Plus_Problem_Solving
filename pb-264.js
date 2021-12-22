/* Delete Occurrences of Extra Elements in an Array
Create a function that takes two arguments: an array arr and a number num. If an element occurs in arr more than num times, remove the
 extra occurrence(s) and return the result.

Examples
deleteOccurrences([1, 1, 1, 1], 2) ➞ [1, 1]

deleteOccurrences([13, true, 13, null], 1) ➞ [13, true, null]

deleteOccurrences([true, true, true], 3) ➞ [true, true, true]
Notes
Do not alter the order of the original array */




function deleteOccurrences(arr, num) {
  let visited = []
  for (let i = 0; i < arr.length; i++) {
    let counter = 0
    if (visited.indexOf(arr[i]) == -1) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          counter++
          if (counter > num) {
            arr.splice(j, 1)
            j--
            counter--
          }
        }
      }

      visited.push(arr[i])
    }


  }
  return arr
}

console.log(deleteOccurrences([1, 1, 1, 1], 2))