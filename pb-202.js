/* Given a positive number x:

p = (p1, p2, …)
// Set of *prime* factors of x
If the square of every item in p is also a factor of x, then x is said to be a powerful number.

Create a function that takes a number and returns true if it's powerful, false if it's not.

Examples
isPowerful(36) ➞ true
// p = (2, 3) (prime factors of 36)
// 2^2 = 4 (factor of 36)
// 3^2 = 9 (factor of 36)

isPowerful(27) ➞ true

isPowerful(674) ➞ false
Notes
N/A */






function isPowerful(num) {
  let factors=[]
  let val=num
  let i=2
  while(val!=1){
    if(val%i==0){
      val=val/i
      factors.push(i)
      i=i-1
    }
    i++
  }
  return [...new Set(factors)].every(val=>num%(val*val)==0)
}

console.log(isPowerful(674))