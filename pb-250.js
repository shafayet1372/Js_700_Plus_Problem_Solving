/* Longest Range in the List (Casual Version)
Given an array of integers, find the length of the longest range of consecutive integers that are contained in the sorted version of the array.

Here's an illustrative example. Consider the array:

[4, 9, 10, 5, 17, 3, 8, 11, 1, 12, 18, 20]
... which, after sorting, becomes:

[1, 3, 4, 5, 8, 9, 10, 11, 12, 17, 18, 20]
The longest consecutive subsequence is now clearly [8, 9, 10, 11, 12], which has length 5.

Examples
maxConsec([4, 9, 10, 5, 17, 3, 8, 11, 1, 12, 18, 20]) ➞ 5
// After sorting array becomes [1, 2, 4, 5, 8, 9, 10, 11, 12, 17, 18, 20]
// Longest consecutive subsequence is [8, 9, 10, 11, 12], which has length 5

maxConsec([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]) ➞ 4
// After sorting get [1, 3, 4, 5, 7, 7, 7, 7, 11, 12, 12, 13, 14]
// Longest consecutive subsequence is [11, 12, 13, 14], which has length 4

maxConsec([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9]) ➞ 6
// After sorting get [1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]
// Longest consecutive subsequence is [1, 2, 3, 4, 5, 6], which has length 6
Notes
As in the 2nd and 3rd examples, the given array is allowed to include repeated elements, but such repetitions are ignored when finding the longest 
range of consecutive elements. */








function maxConsec(arr) {
  let uniAr = [...new Set(arr)].sort((a, b) => a - b)
  let result = [], main = []
  for (let i = 0; i < uniAr.length; i++) {
    if (uniAr[i] + 1 == uniAr[i + 1]) {
      if (result.indexOf(uniAr[i]) >= 0) {
        result.push(uniAr[i + 1])
      } else {
        result.push(uniAr[i], uniAr[i + 1])
      }
    } else {
      main.push(result)
      result = []
    }
  }
  return main.sort((a, b) => b.length - a.length)[0].length


}

console.log(maxConsec([4, 9, 10, 5, 17, 3, 8, 11, 1, 12, 18, 20]))