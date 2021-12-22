/* Check if One Array is a Subset of Another
Array A is contained inside array B if each element in A also exists in B.

The number of times a number is present doesn't matter. In other words, if we transformed both arrays into sets, A would be a subset of B.

A = [3, 3, 9, 9, 9, 5]
B = [1, 3, 9, 5, 8, 44, 44]

A_Set = [3, 9, 5]
B_Set = [1, 3, 9, 5, 8, 44]

// A_Set is a subset of B_Set
Create a function that determines if the first array is a subset of the second.

Examples
subset([1, 3], [1, 3, 3, 5]) ➞ true

subset([4, 8, 7], [7, 4, 4, 4, 9, 8]) ➞ true

subset([1, 3], [1, 33]) ➞ false

subset([1, 3, 10], [10, 8, 8, 8]) ➞ false
Notes
Each input array will have at least one element.
Check the resources tab for a hint.

 */




function subset(arr1, arr2) {
  /*
  shortway
  return arr1.every(val => arr2.indexOf(val) >= 0) */

  for(let i=0;i<arr1.length;i++){
    if(!(arr2.indexOf(arr1[i])>=0)){
      return false
    }
  }
  return true
}

console.log(subset([1, 3], [1, 3, 3, 5]))