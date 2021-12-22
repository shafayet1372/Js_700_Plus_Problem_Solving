/* Hidden Calculator Words
At school, we used to play with our calculators and send each other secret messages. The trick was to enter a special number and turn 
the calculator upside-down. LOL ... I mean 707!

Given a number, create a function that converts it into a word by turning the integer 180 degrees around.

Examples
turnCalc(707) ➞ "LOL"

turnCalc(5508) ➞ "BOSS"

turnCalc(3045) ➞ "SHOE"
 */
function turnCalc(num) {
  let obj = {
    "1": "I", "2": "z", "3": "E", "4": "H", "5": "S", "6": "G", "7": "L", "8": "B", "9": '-', '0': 'O'
  }
  return num.toString().split("").map(val => obj[val]).reverse().join("")
}

console.log(turnCalc(707))