/* Increment to Top
Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists 
of incrementing a digit by one.

Examples
incrementToTop([3, 4, 5]) ➞ 3
// Maximal element in the array is 5.
// To transform 3 to 5 requires 2 steps: 3 -> 4, 4 -> 5.
// To transform 4 to 5 requires 1 step: 4 -> 5.
// Total steps required is 3.

incrementToTop([4, 3, 4]) ➞ 1
// Maximal element in the array is 4.
// To transform 3 to 4 requires 1 steps: 3 -> 4.
// Total steps required is 1.

incrementToTop([3, 3, 3]) ➞ 0

incrementToTop([3, 10, 3]) ➞ 14
Notes
If the array contains only the same digits, return 0 (see example #3).
Bonus: Can you write a solution that achieves this by only traversing the array once? (i.e. without finding the max before hand)
 */


function incrementToTop(arr) {
  let bigNum = arr.sort((a, b) => b - a)[0]
  return arr.reduce((acc, val) => {
    if (bigNum != val) {
      acc = acc + bigNum - val
    }
    return acc
  }, 0)
}
console.log(incrementToTop([3, 4, 5]))