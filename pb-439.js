/* Inclusive Array Ranges
Write a function that, given the start startNum and end endNum values, return an array containing all the numbers inclusive to that range. See examples below.

Examples
inclusiveArray(1, 5) ➞ [1, 2, 3, 4, 5]

inclusiveArray(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]

inclusiveArray(10, 20) ➞ [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

inclusiveArray(17, 5) ➞ [17]
Notes
The numbers in the array are sorted in ascending order.
If startNum is greater than endNum, return an array with the higher value. See example #4.
A recursive version of this of challenge can be found via this link. */


function inclusiveArray(startNum, endNum) {
  if (startNum > endNum) {
    return [startNum]
  }
  let result = []
  for (let i = startNum; i <= endNum; i++) {
    result.push(i)
  }
  return result
}


console.log(inclusiveArray(1, 5))