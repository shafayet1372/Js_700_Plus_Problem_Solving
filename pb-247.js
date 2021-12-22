/* Two Product Problem (Part 2)
Create a function that takes an array arr and a number n and returns an array of two integers whose product is that of the number n.

Examples
twoProduct([1, 2, 3, 4, 13, 5], 39) ➞ [3, 13]

twoProduct([11, 2, 7, 3, 5, 0], 55) ➞ [5, 11]

twoProduct([100, 12, 4, 1, 2], 15) ➞ undefined
Notes
No duplicates.
Sort the number.
Try doing this with 0(n) time complexity.
The array can have multiple solutions, so return the first match you find. */



function twoProduct(arr, n) {
  let product
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        product = arr[i] * arr[j]

        if (product == n) {
          return [arr[i], arr[j]].sort((a, b) => a - b)
        }
      } else {
        product = arr[i]
      }

    }

  }
}

console.log(twoProduct([11, 2, 7, 3, 5, 0], 55))