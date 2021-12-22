/* Balancing Scales
Given an array with an odd number of elements, return whether the scale will tip "left" or "right" based on the sum of the numbers. 
The scale will tip on the direction of the largest total. If both sides are equal, return "balanced".

Examples
scaleTip([0, 0, "I", 1, 1]) ➞ "right"
// 0 < 2 so it will tip right

scaleTip([1, 2, 3, "I", 4, 0, 0]) ➞ "left"
// 6 > 4 so it will tip left

scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1]) ➞ "balanced"
// 15 = 15 so it will stay balanced
Notes
The middle element will always be "I" so you can just ignore it.
Assume the numbers all represent the same unit.
Both sides will have the same number of elements.
There are no such things as negative weights in both real life and the tests!
 */




function scaleTip(arr) {
  let left = 0, right = 0, found
  for (let i = 0; i < arr.length; i++) {
    if (found) {
      right += arr[i]
    } else if (arr[i] != 'I') {
      left += arr[i]
    }
    if (arr[i] == 'I') {
      found = true
    }
  }

  if (left > right) {
    return 'left'
  } else if (left < right) {
    return 'right'
  }
  return 'balanced'
}

console.log(scaleTip([0, 0, "I", 1, 1]))