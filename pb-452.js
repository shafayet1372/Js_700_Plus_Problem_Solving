/* Simon Says
Create a function that takes in two arrays and returns true if the second array follows the first array by one element, and false otherwise. 
In other words, determine if the second array is the first array shifted to the right by 1.

Examples
simonSays([1, 2], [5, 1]) ➞ true

simonSays([1, 2], [5, 5]) ➞ false

simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]) ➞ true

simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3]) ➞ false
Notes
Both input arrays will be of the same length, and will have a minimum length of 2.
The values of the 0-indexed element in the second list and the n-1th indexed element in the first list do not matter. */






function simonSays(arr1, arr2) {
  let len = arr1.length % 2 == 0 ? arr1.length - 1 : arr1.length - 2
  for (let i = 0; i < len; i++) {
    if (arr1[i] != arr2[i + 1]) {
      return false
    }
  }
  return true
}

console.log(simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]))