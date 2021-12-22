/* Number of Arrays in an Array
Return the total number of arrays inside a given array.

Examples
numOfSubbarrays([[1, 2, 3]]) ➞ 1

numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

numOfSubbarrays([1, 2, 3]) ➞ 0
Notes
N/A
 */


function numOfSubbarrays(arr) {
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length) {
      counter++
    }
  }
  return counter
}

console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]))