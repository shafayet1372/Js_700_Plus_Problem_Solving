/* Transforming Words into Binary Strings
Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.

Examples
convertBinary("house") ➞ "01110"

convertBinary("excLAIM") ➞ "0100000"

convertBinary("moon") ➞ "0111"
Notes
Conversion should be case insensitive (see example #2).

 */
function convertBinary(str) {
  let s = str.toLowerCase().split("")
  return s.map((val, i) => {
    if ((str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 109) || (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77)) {
      return 0
    } else {
      return 1
    }
  }).join("")
}

console.log(convertBinary('exclAIM'))