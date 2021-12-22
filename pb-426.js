/* Sum of Found Indexes
Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.

Examples
sumFoundIndexes([0, 3, 3, 0, 0, 3], 3) ➞ 8
// The number 3 was found at indexes 1, 2 and 5.
// 8 = 1 + 2 + 5

sumFoundIndexes([1, 2, 3, 4, 5, 6], 3) ➞ 2

sumFoundIndexes([100, 100, 100, 100, 100], 100) ➞ 10

sumFoundIndexes([5, 10, 15, 20], 2) ➞ 0
Notes
0 can be the result if no number in the array matches or if the only matching element is at index 0. */





function sumFoundIndexes(arr, n) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
      sum += i
    }
  }
  return sum
}
console.log(sumFoundIndexes([0, 3, 3, 0, 0, 3], 3))