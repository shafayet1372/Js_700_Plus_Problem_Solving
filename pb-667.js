/* Making a Countdown
Create a function where given the number n to count down from, and some words str, return a countdown sequence as a string leading up to the words at the end.

Put a full stop after each number and uppercase and add an exclamation mark to the word. See the examples below for clarification!

Examples
countdown(10, "Blast Off") ➞ "10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!"

countdown(3, "go") ➞ "3. 2. 1. GO!"

countdown(5, "FIRE") ➞ "5. 4. 3. 2. 1. FIRE!"
Notes
n will be a number greater than 0.
str won't already include an exclamation mark.
Don't include 0 in the countdown. */

function countdown(n, str) {
  let s = ""
  let l = n
  for (let i = 1; i <= n; i++) {
    s = s + `${l--}.`.repeat(1)+' '
  }
  return `${s}${str.toUpperCase()}!`
}

console.log(countdown(10, "Blast Off"))