/* Purge and Organize
Given an array of numbers, write a function that returns an array that...

Has all duplicate elements removed.
Is sorted from least to greatest value.
Examples
uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]

uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]

uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
Notes
N/A */

function uniqueSort(arr) {
  /* shortcut
  let unique=[...new Set(arr)].sort((a,b)=>a-b)
    return unique */
  let unique = []
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) == -1) {
      unique.push(arr[i])
    }
  }
  for (let i = 0; i < unique.length; i++) {
    for (let j = i + 1; j < unique.length; j++) {
      if (unique[i] > unique[j]) {
        let swap = unique[i]
        unique[i] = unique[j]
        unique[j] = swap
      }
    }
  }
  return unique
}

console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]))