/* No Hidden Fees
Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), 
otherwise return false.

Examples
hasHiddenFee(["$2", "$4", "$1", "$8"], "$15") ➞ false

hasHiddenFee(["$1", "$2", "$3"], "$6") ➞ false

hasHiddenFee(["$1"], "$4") ➞ true
Notes
Remember that each price is given as a string.
All $ signs will be at the beginning of the number.
 */





function hasHiddenFee(prices, t) {
  let sum = prices.reduce((acc, val) => {
    val = parseInt(val.split("$").join(""))
    return acc = acc + val
  }, 0)
  return parseInt(t.split('$').join("")) > sum
}

console.log(hasHiddenFee(["$1"], "$4"))