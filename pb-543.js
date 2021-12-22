/* Return Duplicate Numbers
Given an array nums where each integer is between 1 and 100, return a sorted array containing only duplicate numbers from the given nums array.

Examples
duplicateNums([1, 2, 3, 4, 3, 5, 6]) ➞ [3]

duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]) ➞ [72, 81, 99]

duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ null
Notes
The given array won't contain the same number three times. */

function duplicateNums(nums) {
  let visited = [], result = []
  for (let i = 0; i < nums.length; i++) {
    let counter = 0
    if (visited.indexOf(nums[i]) == -1) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] == nums[j]) {
          counter++

        }
      }
      visited.push(nums[i])
    }
    if (counter >= 2) {
      result.push(nums[i])
    }
  }
  return result.length?result.sort((a, b) => a - b):null
}

console.log(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]))