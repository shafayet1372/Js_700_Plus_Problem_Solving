/* 
Change the Word
Given a string, reverse its order, change lowercase letters to uppercase and increment uppercase letters by one (e.g. A becomes B, C becomes D, Z becomes A).

Examples
changeString("ApPle") ➞ "ELQPB"

changeString("draGON") ➞ "OPHARD"

changeString("ZebrA") ➞ "BRBEA"
Notes
Remember capital "Z" becomes "A".
 */
function changeString(word) {
  let s = word.split("").reverse()
  return s.map(x => {
    if (x.toUpperCase() == x) {
      return x.charCodeAt(0) == 90 ? "A" : String.fromCharCode(x.charCodeAt(0) + 1)
    }
    return x.toUpperCase()
  }).join("")
}

console.log(changeString("ZebrA"))