/* Is It the Same Upside Down?
The number 6090609 has a special property: if you turn the number upside down (imagine rotating your screen 180 degrees), you get 6090609 again.

Write a function that takes a string on the digits 0, 6, 9 and returns true if the number is the same upside down or false otherwise.

Examples
sameUpsidedown("6090609") ➞ true

sameUpsidedown("9669") ➞ false
// Becomes 6996 when upside down.

sameUpsidedown("69069069") ➞ true
Notes
N/A */

function sameUpsidedown(strNum) {

  return strNum.split("").map(val => {
    if (val == '6') {
      return '9'
    } else if (val == '9') {
      return '6'
    }
    return val
  }).reverse().join("") == strNum
}

console.log(sameUpsidedown('6090609'))