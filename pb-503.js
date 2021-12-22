/* Good Match?
In this challenge you will be given an array of numbers. Your task is to "marry" each pair of adjacent numbers by adding them, 
and return the array of "couples" (i.e. sums).

If the array has an odd length, one number is (sadly) left out, so you should return "bad match".

Examples
isGoodMatch([1, 2, 4, 7]) ➞ [1+2, 4+7] ➞ [3, 11]

isGoodMatch([5, 7, 9, -1, 4, 2]) ➞ [12, 8, 6]

isGoodMatch([5, 7, 9, -1, 4, 2, 3]) ➞ "bad match"

isGoodMatch([2, 6, 7, -2, 4]) ➞ "bad match"
Notes
N/A */

function isGoodMatch(arr) {
  if (arr.length % 2 == 1) {
    return 'bad match'
  }
  let result = []
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i] + arr[i + 1])
  }
  return result
}

console.log(isGoodMatch([1, 2, 4, 7]))