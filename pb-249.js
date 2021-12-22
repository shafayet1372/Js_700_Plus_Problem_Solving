/* String Factoring
Given the complete factorization of a number, create a function that converts this array of factors to a string.

To illustrate: 24's complete factorization is [2, 2, 2, 3], which should be converted to "2^3 x 3".

Examples
stringFactor([2, 2, 2, 3, 3]) ➞ "2^3 x 3^2"

stringFactor([2, 7]) ➞ "2 x 7"

stringFactor([2, 3, 3]) ➞ "2 x 3^2"
Notes
Factors should be joined with x (multiplication sign).
Multiple instances of the same factor should be exponentiated.
Factors raised to the 1 power should be left as is, i.e. write 7 instead of 7^1. */





function stringFactor(arr) {

  let result = [], visited = []
  for (let i = 0; i < arr.length; i++) {
    let counter = 0
    if (visited.indexOf(arr[i]) == -1) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          counter++
        }
      }
      visited.push(arr[i])
      if (counter == 1) {
        result.push(arr[i])
      } else {
        result.push(`${arr[i]}^${counter}`)
      }
    }


  }
  return result.join(' x ')
}

console.log(stringFactor([2, 7]))