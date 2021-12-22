/* The Array Twins
Create a function that given an array, it returns the index where if split in two-subarrays (last element of the first array has index of
 (foundIndex-1)), the sum of them are equal.

Examples
twins([10, 20, 30, 5, 40, 50, 40, 15]) ➞ 5
// foundIndex 5 : [10+20+30+5+40]=[50+40+15]

twins([1, 2, 3, 4, 5, 5]) ➞ 4
// [1, 2, 3, 4] [5, 5]

twins([3, 3]) ➞ 1
Notes
Return only the foundIndex, not the divided arrays.
 */





function twins(arr) {
  let sum1, sum2

  for (let i = 0; i < arr.length; i++) {
    let ar1 = arr.slice(0, i + 1)
    let ar2 = arr.slice(i + 1, arr.length)

    sum1 = ar1.reduce((acc, val) => {
      return acc + val
    }, 0)
    sum2 = ar2.reduce((acc, val) => {
      return acc + val
    }, 0)
    if (sum1 == sum2) {
      return i + 1
    }

  }
}

console.log(twins([1, 2, 3, 4, 5, 5]))