/* How Many Decimal Places?
Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.

Examples
getDecimalPlaces("43.20") ➞ 2

getDecimalPlaces("400") ➞ 0

getDecimalPlaces("3.1") ➞ 1
Notes
Return 0 if the number doesn't have any decimal places (see example #2) */


function getDecimalPlaces(num) {
  let counter = 0, m = false, index
  let numbers = num.split("")
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == '.') {
      m = true
      index = i
    }
    if (m && index != i) {
      counter++
    }
  }
  return counter
}

console.log(getDecimalPlaces('43.20'))