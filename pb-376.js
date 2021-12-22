/* Largest Swap
Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

To illustrate:

largestSwap(27) ➞ false

largestSwap(43) ➞ true
If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

Examples
largestSwap(14) ➞ false

largestSwap(53) ➞ true

largestSwap(99) ➞ true
Notes
Numbers with two identical digits (third example) should yield true (you can't
 */

function largestSwap(num) {
  let nums = num.toString().split("")
  let swap = nums[0]
  nums[0] = nums[1]
  num[1] = swap
  if(num>parseInt(nums.join("")) || num==parseInt(nums.join(""))){
    return true
  }
  return false
}

console.log(largestSwap(43))