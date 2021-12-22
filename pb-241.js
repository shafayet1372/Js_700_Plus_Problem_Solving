/*make every first character of word uppercase and other character to lowercase 
in a string*/


function toUpperCaseWord(str) {
  let s = str.split("")
  for (let i = 0; i < s.length; i++) {
    if (i == 0) {
      s[i] = s[i].toUpperCase()
    } else {
      if (s[i] == s[i].toUpperCase() && [i - 1] != ' ') {
        s[i] = s[i].toLowerCase()
      } else if (s[i - 1] == ' ') {
        s[i] = s[i].toUpperCase()
      }
    }
  }
  return s.join("")
}


console.log(toUpperCaseWord("HeLLO shaFayeT hOw Are you?"))