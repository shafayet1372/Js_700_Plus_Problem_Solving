/* Given a fraction frac (given in the format "1/2" for example) and n number of decimal places, return a sentence in the following format:

"{fraction} rounded to {n} decimal places is {answer}"

Examples
fracRound("1/3", 5) ➞ "1/3 rounded to 5 decimal places is 0.33333"

fracRound("2/8", 4) ➞ "2/8 rounded to 4 decimal places is 0.2500"

fracRound("22/7", 2) ➞ "22/7 rounded to 2 decimal places is 3.14" */

function fracRound(frac, n) {
  let calc = eval(frac).toString().split('.')
  let result
  result = eval(frac).toFixed(n)
  return `${frac} rounded to ${n} decimal places is ${result}`
}

console.log(fracRound("22/7", 2))