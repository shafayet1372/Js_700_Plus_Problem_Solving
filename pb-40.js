/* Determine if the given character is a digit or not.

Example

For symbol = '0', the output should be
isDigit(symbol) = true;
For symbol = '-', the output should be
isDigit(symbol) = false. */

function isDigit(symbol) {
let exp=/^\d$/
return exp.test(symbol)
}
console.log(isDigit("\"))