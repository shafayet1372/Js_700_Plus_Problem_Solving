/* Two is the Difference
Create a function that takes an array of integers and returns all pairs of integers that have a difference of two. The 
resulting array should be sorted in ascending order of values.

Examples
differenceTwo([1, 2, 3, 4]) ➞ [[1, 3], [2, 4]]

differenceTwo([1, 23, 3, 4, 7]) ➞ [[1, 3]]

differenceTwo([4, 3, 1, 5, 6]) ➞ [[1, 3], [3, 5], [4, 6]]
Notes
Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter. */

function differenceTwo(n) {
  let ar = n.sort((a, b) => a - b)
  let result = []
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length; j++) {
      if (ar[j] - ar[i] == 2) {
        result.push([ar[i], ar[j]])
        break;
      }
    }
  }
  return result
}

console.log(differenceTwo([4, 3, 1, 5, 6]))