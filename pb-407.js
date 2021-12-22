/* Number to Reversed Array
Create a function that takes a number and returns an array with the digits of the number in reverse order.

Examples
reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]

reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]

reverseArr(12345) ➞ [5, 4, 3, 2, 1]
Notes
 */



function reverseArr(num) {
  let nums = num.toString().split("")
  let result = []
  for (let i = nums.length - 1; i >= 0; i--) {
    result.push(parseInt(nums[i]))
  }
  return result
}

console.log(reverseArr(1485979))