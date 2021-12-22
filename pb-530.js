/* Find the Odd Integer
Create a function that takes an array and finds the integer which appears an odd number of times.

Examples
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]) ➞ -1

findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]) ➞ 5

findOdd([10]) ➞ 10
Notes
There will always only be one integer that appears an odd number of times */

function findOdd(arr) {
  /*  
  //shortway
  return arr.filter(x => {
      let counter = 0
      arr.forEach(y => {
        if (x == y) {
          counter++
        }
      })
      return counter % 2 == 1
    })[0] */
  let visited = []
  for (let i = 0; i < arr.length; i++) {
    let counter = 0
    if (visited.indexOf(arr[i]) == -1) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          counter++
        }
      }
    }
    visited.push(arr[i])
    if (counter % 2 == 1) {
      return arr[i]
    }
  }
}

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]))