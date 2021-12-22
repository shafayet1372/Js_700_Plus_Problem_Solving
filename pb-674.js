/* Reverse Coding Challenge #1
This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function 
to satisfy the relationship between the inputs and outputs.

Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.

Examples
"A4B5C2" ➞ "AAAABBBBBCC"

"C2F1E5" ➞ "CCFEEEEE"

"T4S2V2" ➞ "TTTTSSVV"

"A1B2C3D4" ➞ "ABBCCCDDDD"
Notes
If you get stuck, check the Comments for help */

function mysteryFunc(str) {
  let s = str.match(/\w\d+/g)
  for (let i = 0; i < s.length; i++) {
    let val = s[i].split('')
    s[i] = val[0].repeat(parseInt(val.slice(1, val.length).join("")))
    
  }
  return s.join("")
}

console.log(mysteryFunc("A4B5C2"))