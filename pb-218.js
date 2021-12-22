/* Create a function that alternates the case of the letters in a string (known as Spongecase).

Examples
alternatingCaps("Hello") ➞ "HeLlO"

alternatingCaps("How are you?") ➞ "HoW aRe YoU?"

alternatingCaps("OMG this website is awesome!") ➞ "OmG tHiS wEbSiTe Is AwEsOmE!"
Notes
The first character should always be UPPERCASE.
Ignore spaces. */






function alternatingCaps(str) {
  let newStr = str.split("")
  let triger = 0
  for (let i = 0; i < newStr.length; i++) {
    if (i == 0) {
      newStr[i] = newStr[i].toUpperCase()
    } else if (triger && newStr[i] != '') {
      newStr[i] = newStr[i].toUpperCase()
      if (newStr[i + 1] == ' ') {
        triger = 1
      } else {
        triger = 0
      }
    } else if (!triger && newStr[i] != '') {
      newStr[i] = newStr[i].toLowerCase()
      if (newStr[i + 1] == ' ') {
        triger = 0
      } else {
        triger = 1
      }
    }

  }
  return newStr.join("")
}

console.log(alternatingCaps("alternating caps"))