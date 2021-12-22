/* Joining Digits Together
Create a function which takes in a number n as input and returns all numbers up to and including n joined together in a string. 
Separate each digit from each other with the character "-".

Examples
joinDigits(4) ➞ "1-2-3-4"

joinDigits(11) ➞ "1-2-3-4-5-6-7-8-9-1-0-1-1"

joinDigits(15) ➞ "1-2-3-4-5-6-7-8-9-1-0-1-1-1-2-1-3-1-4-1-5"
Notes
Remember to start at 1 and include n as the last number. */

function joinDigits(n) {
  let result = []
  for (let i = 1; i <= n; i++) {
    if (i > 9) {
      let val = i.toString().split("").map(x => {
        return x
      }).join("-")
      result.push(val)
    } else {
      result.push(i)
    }
  }
  return result.join("-")
}

console.log(joinDigits(11))