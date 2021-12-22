/* Sum Fractions
Create a function that takes an array containing nested arrays as an argument. Each subarray has 2 elements. 
The first element is the numerator and the second element is the denominator. Return the sum of the fractions rounded to the nearest whole number.

Examples
sumFractions([[18, 13], [4, 5]]) ➞ 2

sumFractions([[36, 4], [22, 60]]) ➞ 9

sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]) ➞ 11
Notes
Your result should be a number not string.
 */

function sumFractions(arr) {
  return Math.floor(arr.reduce((acc, val) => {
    return acc = acc + (val[0] / val[1])
  }, 0))

}

console.log(sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]))