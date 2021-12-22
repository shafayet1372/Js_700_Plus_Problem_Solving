/* Bundle Up!
Lets assume for the purposes of this challenge that for every layer of fabric you wear when it's cold outside (coats, cardigans, etc), the temperature
 increases by a tenth of the total.

Given n number of layers and a given temperature, return the temperature inside of all those warm fuzzy layers. Round to the nearest tenth of a degree.

calcBundledTemp(2, "10*C") ➞ "12.1*C"
// 10 * 1.1 = 11
// 11 * 1.1 = 12.1
Examples
calcBundledTemp(1, "2*C") ➞ "2.2*C"

calcBundledTemp(4, "6*C") ➞ "8.8*C"

calcBundledTemp(20, "4*C") ➞ "26.9*C"
Notes
The temperature will be given in celsius and as a string.
Note that the degrees sign is given as an asterisk. */

function calcBundledTemp(n, temp) {
  let total = parseInt(temp.split("*")[0])
  let i = 0
  while (i < n) {
    total = total + (total / 100) * 10
    i++
  }
  return `${total.toFixed(1)}*C`
}

console.log(calcBundledTemp(2, "10*C"))