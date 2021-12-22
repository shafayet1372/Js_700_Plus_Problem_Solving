/* Format Number with Comma(s) Separating Thousands
Create a function that takes a number as an argument and returns a string formatted to separate thousands.

Examples
formatNum(1000) ➞ "1,000"

formatNum(100000) ➞ "100,000"

formatNum(20) ➞ "20"
Notes
You can expect a valid number for all test cases. */

function formatNum(num) {
  let s = num.toString().split("")
  let result = []
  let counter = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (counter % 3 == 0 && counter != 0) {
      result[i] = `${s[i]},`
    } else {
      result[i] = s[i]
    }

    counter++
  }
  return result.join("")
}

console.log(formatNum("1000000"))