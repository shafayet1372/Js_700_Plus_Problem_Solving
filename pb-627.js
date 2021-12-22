/* Split Item Codes
You have an array of item codes with the following format: "[letters][digits]"

Create a function that splits these strings into their alphabetic and numeric parts.

Examples
splitCode("TEWA8392") ➞ ["TEWA", 8392]

splitCode("MMU778") ➞ ["MMU", 778]

splitCode("SRPE5532") ➞ ["SRPE", 5532]
Notes
N/A */

function splitCode(item) {
  let str = [], number = []
  let s = item.split("")
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      str.push(s[i])
    } else {
      number.push(s[i])
    }
  }
  return [str.join(""), parseInt(number.join(""))]
}

console.log(splitCode("TEWA8392"))