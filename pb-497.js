/* Sum of Every Nth Number
Given an array of numbers and a positive value for n, return the sum of every nth number in the array.

Examples
sumEveryNth([4, 8, 6, 6, 7, 9, 3], 1) ➞ 43
// 4+8+6+6+7+9+3 = 43

sumEveryNth([7, 3, 10, 4, 5, 8, 4, 9, 6, 9, 10, 1, 4], 4) ➞ 14
// 4+9+1 = 14

sumEveryNth([10, 6, 5, 4, 5, 2, 3, 3, 8, 10, 7, 2], 8) ➞ 3
// 3

sumEveryNth([6, 8, 9, 4, 6, 4, 7, 1, 5, 6, 10, 2], 13) ➞ 0
// only 12 numbers in array
Notes
N/A

 */





function sumEveryNth(numbers, n) {
  let sum = 0
  for (let i = n - 1; i < numbers.length; i += n) {
    sum += numbers[i]
  }
  return sum
}

console.log(sumEveryNth([7, 3, 10, 4, 5, 8, 4, 9, 6, 9, 10, 1, 4], 4))