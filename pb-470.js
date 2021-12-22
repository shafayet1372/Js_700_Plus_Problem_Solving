/* Sum of Odd and Even Numbers
Write a function that takes an array of numbers and returns an array with two elements:

The first element should be the sum of all even numbers in the array.
The second element should be the sum of all odd numbers in the array.
Example
sumOddAndEven([1, 2, 3, 4, 5, 6]) ➞ [12, 9]
// 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9

sumOddAndEven([-1, -2, -3, -4, -5, -6]) ➞ [-12, -9])

sumOddAndEven([0, 0]) ➞ [0, 0])
Notes
Count 0 as an even number. */





function sumOddAndEven(arr) {
  let evn = 0, odd = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evn += arr[i]
    } else {
      odd += arr[i]
    }
  }
  return [evn, odd]
}

console.log(sumOddAndEven([1, 2, 3, 4, 5, 6]))