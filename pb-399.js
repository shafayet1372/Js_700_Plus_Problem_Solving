/* Factor Chain
A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

[3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
Create a function that determines whether or not an array is a factor chain.

Examples
factorChain([1, 2, 4, 8, 16, 32]) ➞ true

factorChain([1, 1, 1, 1, 1, 1]) ➞ true

factorChain([2, 4, 6, 7, 12]) ➞ false

factorChain([10, 1]) ➞ false
Notes
N/A */




function factorChain(arr) {
  let i = 1;
  while (i < arr.length) {
    let l = 1, g = []
    while (l <= arr[i]) {
      if (arr[i] % l == 0) {
        g.push(l)
      }
      l++
    }
    if (g.indexOf(arr[i - 1]) >= 0) {
      i++
    } else {
      return false
    }

  }
  return true
}

console.log(factorChain([1, 2, 4, 8, 16, 32]))