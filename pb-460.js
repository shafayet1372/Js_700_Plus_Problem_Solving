/* All Numbers in Array Are Prime
Create a function thats takes an array of integers and returns true if every number is prime. Otherwise, return false.

Examples
allPrime([7, 5, 2, 4, 6]) ➞ false

allPrime([2, 3, 5, 7, 13, 17, 19, 23, 29]) ➞ true

allPrime([1, 5, 3]) ➞ false
Notes
1 is not a prime number. */


function allPrime(nums) {
  return nums.every(val => {
    let counter = 0
    for (let i = 1; i <= val; i++) {
      if (val % i == 0) {
        counter++
      }
    }
    return counter == 2
  })
}

console.log(allPrime([7, 5, 2, 4, 6]))