/* Convert String to camelCase
Create a function that converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples
toCamelCase("A-B-C") ➞ "ABC"

toCamelCase("the-stealth-warrior") ➞ "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") ➞ "TheStealthWarrior"
Notes
An empty string as input "" should return an empty string. */


function toCamelCase(str) {
  if (!str) {
    return ""
  }
  let s = str.split("")
  let flag = null
  return s.map((val, i, arr) => {
    if (val == '_' || val == '-') {
      flag = arr[i + 1]
      return arr[i + 1].toUpperCase()
    } else if (flag == val) {
      flag = null
      return ''
    }
    return val
  }).join("")
}

console.log(toCamelCase("the-stealth-warrior"))