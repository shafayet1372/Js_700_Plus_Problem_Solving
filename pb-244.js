/* Given an array and a set, return a sorted array with its items in ascending order but prioritize the elements in the set over the other items in the array.

Examples
prioritySort([5, 4, 3, 2, 1], new Set([2, 3])) ➞ [2, 3, 1, 4, 5]

prioritySort([5, 4, 3, 2, 1], new Set([3, 6])) ➞ [3, 1, 2, 4, 5]

prioritySort([-5, -4, -3, -2, -1, 0], new Set([-4, -3])) ➞ [-4, -3, -5, -2, -1, 0]
Notes
If the array is empty, return an empty array.
If the set is empty there is nothing to prioritize, but the array should still be sorted.
The set may contain values that are not in the array.
The array may contain duplicates.
The array and the set will only contain integer values.
 */






function prioritySort(arr, s) {

  s = [...s]
  let pArr = [], notParr = []
  arr.forEach(val => {
    if (s.indexOf(val) >= 0) {
      pArr.push(val)
    } else {
      notParr.push(val)
    }
  })
  return [...pArr.sort((a, b) => a - b), ...notParr.sort((a, b) => a - b)]
}

console.log(prioritySort([-5, -4, -3, -2, -1, 0], new Set([-4, -3])))