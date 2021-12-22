/* Find NaN in an Array
Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

Examples
findNaN([1, 2, NaN]) ➞ 2

findNaN([NaN, 1, 2, 3, 4]) ➞ 0

findNaN([0, 1, 2, 3, 4]) ➞ -1
Notes
NaN will occur in the input array only once.
 */




function findNaN(number) {
  for (let i = 0; i < number.length; i++) {
    if (isNaN(number[i])) {
      return i
    }
  }
  return -1
}

console.log(findNaN([1, 2, NaN]))