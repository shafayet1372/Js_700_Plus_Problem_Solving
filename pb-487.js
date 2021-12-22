/* Basic Statistics: Median
The median of a group of numbers is the middle number when the group is sorted. If the size of the group is even, the median is
 the average of the middle two numbers. Given a sorted array of numbers, return the median (rounded to one decimal place if the median isn't an integer).

Examples
median([1, 2, 4, 5, 6, 8, 8, 8, 10]) ➞ 6

median([2, 2, 6, 8, 8, 10, 10]) ➞ 8

median([1, 2, 2, 4, 7, 8, 9, 10]) ➞ 5.5
Notes
N/A
 */

function median(nums) {
  let median = Math.floor(nums.length / 2)
  if (nums.length % 2 == 0) {
    return ((nums[median - 1] + nums[median]) / 2)
  }
  return nums[median]
}

console.log(median([1, 4, 8, 8, 8, 8, 9, 10]))