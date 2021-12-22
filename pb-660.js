/* Length of Worm
Given a string worm create a function that takes the length of the worm and converts it into millimeters. Each - represents one centimeter.

Examples
wormLength("----------") ➞ "100 mm."

wormLength("") ➞ "invalid"

wormLength("---_-___---_") ➞ "invalid"
Notes
Return "invalid" if an empty string is given or if the string has characters other than -. */

function wormLength(worm) {
  if (!worm) {
    return 'invalid'
  }
  let s = worm.split("")
  for (let i = 0; i < s.length; i++) {
    if (s[i] != '-') {
      return 'invalid'
    }
  }
  return `${s.length * 10} mm.`
}

console.log(wormLength("----------"))