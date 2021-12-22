/* Move Capital Letters to the Front
Create a function that moves all capital letters to the front of a word.

Examples
capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"
Notes
Keep the original relative order of the upper and lower case letters the same. */

function capToFront(s) {
  let str = s.split("")
  let ar1 = [], ar2 = []
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() == str[i]) {
      ar1.push(str[i])
    } else {
      ar2.push(str[i])
    }
  }
  return [...ar1, ...ar2].join("")
}

console.log(capToFront("hApPy"))