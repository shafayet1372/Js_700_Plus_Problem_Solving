/* Convert camelCase to snake_case
Create a function that takes a string of words (or just one word) and converts each word from camelCase to snake_case.

Examples
camelToSnake("magicCarrots") ➞ "magic_carrots"

camelToSnake("greatApples for aSmellyRhino") ➞ "great_apples for a_smelly_rhino"

camelToSnake("thatsGreat") ➞ "thats_great"
Notes
You won't get more than two capitals in a row (e.g. "DIYFoods" is not given). */

function camelToSnake(str) {
  let s = str.split("")
  let newstr = ""
  for (let i = 0; i < s.length; i++) {
    if ((i != 0 && s[i] != ' ' && isNaN(s[i])) && (s[i - 1].toLowerCase() == s[i - 1] && s[i].toUpperCase() == s[i])) {
      s[i] = s[i].toLowerCase()
      newstr += '_' + s[i]
    } else {
      newstr += s[i]
    }
  }

  return newstr
}

console.log(camelToSnake("th1sSh0uldB3FineT00"))