/* Three Arrays!
Given three arrays of integers: arr1, arr2, arr3, return the sum of integers which are common in all three arrays.

Examples
sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2]) ➞ 5
// 2 & 3 are common in all 3 arrays.

sumCommon([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]) ➞ 7
// 2, 2 & 3 are common in all 3 arrays.

sumCommon([1], [1], [2]) ➞ 0
Notes
N/A */


function sumCommon(arr1, arr2, arr3) {
  let sum = 0
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) >= 0 && arr3.indexOf(arr1[i]) >= 0) {
      sum += arr1[i]
      arr2.splice(arr2.indexOf(arr1[i]), 1)
      arr3.splice(arr3.indexOf(arr1[i]), 1)
    }
  }
  return sum
}

console.log(sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2]))