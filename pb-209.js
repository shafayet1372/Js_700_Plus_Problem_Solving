/* A positive number's population is the sum of 1's in its binary representation.

An evil number has an even numbered population.
An odious number has an odd numbered population.
A number is pernicious if its population is a prime number.
Create a function that takes a number as an argument and returns a sorted array of all its descriptors ("Evil", "Odious", or "Pernicious").

Examples
howBad(7) ➞ ["Odious", "Pernicious"]
// 7 in binary is "111".
// 1 + 1 + 1 = 3 in "111" means "Odious" should be added to the array answer.
// 3 is a prime number, meaning "Pernicious" should also be added.

howBad(17) ➞ ["Evil", "Pernicious"]
// 17 in binary is "10001".
// 1 + 1 = 2 in "10001" means "Evil" should be added to the array answer.
// 2 is a prime number, meaning "Pernicious" should also be added.

howBad(23) ➞ ["Evil"]
// 23 in binary is "10111".
// Four 1's in "10111" means "Evil" should be added to the array answer.
// 4 is not a prime number, meaning "Pernicious" should not be added.
Notes
N/A
 */





function howBad(num) {

  let primeCheck = (val) => {
  let counter = 0
    for (let i = 1; i <= val; i++) {
      if (val % i == 0) {
        counter++
      }
    }
    return counter == 2 ? true : false
  }
  let binary = [], result = []
  let quo = null
  while (num != 0) {
    binary.push(num % 2)
    quo = Math.floor(num / 2)
    num = quo
  }
  let newAr = binary.filter(val => val == 1)
  result.push(newAr.length % 2 == 0 ? "Evil" : "Odious")
  if (primeCheck(newAr.length)) {
    result.push("Pernicious")
  }
  return result
}

console.log(howBad(7))