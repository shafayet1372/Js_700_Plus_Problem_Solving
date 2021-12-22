/* 
Create a function that takes an integer array and return the biggest between positive sum, negative sum, or 0s count. The major is understood as 
the greatest absolute.

arr = [1,2,3,4,0,0,-3,-2], the function has to return 10, because:

Positive sum = 1+2+3+4 = 10
Negative sum = (-3)+(-2) = -5
0s count = 2 (there are two zeros in array)
Examples
majorSum([1, 2, 3, 4, 0, 0, -3, -2]) ➞ 10

majorSum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0]) ➞ -27

majorSum([0, 0, 0, 0, 0, 1, 2, -3]) ➞ 5
// Because -3 < 1+2 < 0sCount = 5
Notes
All numbers are integers.
There aren't empty arrays.
All tests are made to return only one value. */








function majorSum(arr) {
  let psum = 0, nsum = 0, countZ = 0, result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      psum = psum + arr[i]
    } else if (arr[i] < 0) {
      nsum = nsum + arr[i]
    } else {
      countZ++
    }

    if (i == arr.length - 1) {
      result = [psum, nsum, countZ]
    }
  }
  return result.sort((a, b) => {
    if (a < 0) {
      a = a * (-1)
    }
    if (b < 0) {
      b = b * (-1)
    }
    return b - a
  })[0]
}

console.log(majorSum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0]))