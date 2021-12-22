/* Money Formatting
Given a number, return a string which is formatted into US Dollars and cents!

Remember that:

You should round to two digits after the decimal point (even for integers).
Thousandths should be separated by commas.
Examples
dollaDollaBills(10) ➞ "$10.00"

dollaDollaBills(1000000) ➞ "$1,000,000.00"

dollaDollaBills(-314159.2653) ➞ "-$314,159.27"

dollaDollaBills(-56.99) ➞ "-$56.99"
Notes
There will be both negative and positive inputs.
Check the Resources tab for many tutorials on how to approach string formatting.
 */
function dollaDollaBills(money) {
  let str = money.toString().split("")
  let len
  let counter = 0
  let newstr = ""
  let numToDeci = money.toFixed(2).split("")

  if (str.indexOf('.') >= 0) {
    len = str.indexOf('.') - 1
  } else {
    len = str.length - 1
  }
  console.log(len)
  for (len; len >= 0; len--) {
    if (!isNaN(str[len])) {
      counter++
    }
    if (counter == 3 && !isNaN(str[len - 1])) {
      newstr = newstr + str[len] + ','
      counter = 0
    } else if (money < 0 && len == 0) {
      newstr = newstr + '$-'
    } else if (len == 0) {
      newstr = newstr + str[len] + '$'
    } else {
      newstr += str[len]
    }

  }
  return `${newstr.split("").reverse().join("")}${numToDeci.slice(numToDeci.length - 3, numToDeci.length).join("")}`
}

console.log(dollaDollaBills(-314159.2653))