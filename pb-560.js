/* Strictly Increasing or Decreasing

Create a function that takes an array and determines whether it's strictly increasing, strictly decreasing, or neither.
Examples

check([1, 2, 3]) ➞ "increasing"

check([3, 2, 1]) ➞ "decreasing"

check([1, 2, 1]) ➞ "neither"

check([1, 1, 2]) ➞ "neither"

Notes

    The last example does NOT count as strictly increasing, since 1-indexed 1 is not strictly greater than the 0-indexed 1.
    Input arrays have a minimum length of 2. */

function check(arr) {
  let flag1, flag2
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      flag1 = true
    } else if (arr[i] > arr[i + 1]) {
      flag2 = true
    } else {
      return 'neither'
    }
  }
  if (flag1 && flag2) {
    return 'neither'
  } else if (flag1) {
    return 'increasing'
  }
  return 'decreasing'
}

console.log(check([1, 2, 3]))