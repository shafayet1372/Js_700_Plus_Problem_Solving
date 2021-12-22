/* Return the Highest and Lowest Numbers
Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).

Examples
highLow("1 2 3 4 5") ➞ "5 1"

highLow("1 2 -3 4 5") ➞ "5 -3"

highLow("1 9 3 4 -5") ➞ "9 -5"

highLow("13") ➞ "13 13"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
 */

function highLow(str) {
  let nums = str.split(" ")
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (parseInt(nums[i]) < parseInt(nums[j])) {
        let swap = nums[i]
        nums[i] = nums[j]
        nums[j] = swap
      }
    }
  }
  return `${nums[0]} ${nums[nums.length - 1]}`
}

console.log(highLow("1 2 3 4 5"))