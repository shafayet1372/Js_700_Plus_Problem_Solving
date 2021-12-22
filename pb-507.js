/* Adding Both Ends Together
Given an array of numbers, of any length, create a function which counts how many of those numbers pass the following criterea:

The first and last digits of a number must add to 10.
Examples
endsAddTo10([19, 46, 2098]) ➞ 3

endsAddTo10([33, 44, -55]) ➞ 1

endsAddTo10([]) ➞ 0
Notes
All items in the array will be numbers.
Ignore negative signs (see example #2).
If given an empty array, return 0. */



function endsAddTo10(nums) {
  let counter = 0
  for (let i = 0; i < nums.length; i++) {
    let digits = nums[i].toString().split("-").join("").split("")
    let fValue = parseInt(digits[0]) < 0 ? parseInt(digits[0]) * (-1) : parseInt(digits[0])
    let lValue = parseInt(digits[digits.length - 1]) < 0 ? parseInt(digits[digits.length - 1]) * (-1) : parseInt(digits[digits.length - 1])
    console.log(fValue)
    if (fValue + lValue == 10) {
      counter++
    }
  }
  return counter
}

console.log(endsAddTo10([33, 44, -55]))