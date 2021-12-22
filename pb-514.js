/* Merge Arrays in Order
Given two arrays, merge them to one array and sort the new array in the same order as the first array.

Examples
mergeSort([1, 2, 3], [5, 4, 6]) ➞ [1, 2, 3, 4, 5, 6]

mergeSort([8, 6, 4, 2], [-2, -6, 0, -4]) ➞ [8, 6, 4, 2, 0, -2, -4, -6]

mergeSort([120, 180, 200], [190, 175, 130]) ➞ [120, 130, 175, 180, 190, 200]
Notes
You'll always get two arrays as arguments.
The first array is always sorted, either asc or desc */.


function mergeSort(arr1, arr2) {
  let val1 = arr1[0]
  let val2 = arr1[arr1.length - 1]
  if (val1 > val2) {
    return [...arr1,...arr2].sort((a, b) => b - a)
  }
  return [...arr1,...arr2].sort((a, b) => a - b)
}

console.log(mergeSort([-1, -3], [11, -5, 7, -11]))