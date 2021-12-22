/* Decrypt the String from Digits to Letters
Given a string s consisting from digits and #, translate s to English lowercase characters as follows:

Characters ("a" to "i") are represented by ("1" to "9").
Characters ("j" to "z") are represented by ("10#" to "26#").
Examples
decrypt("10#11#12") ➞ "jkab"

decrypt("1326#") ➞ "acz"

decrypt("25#") ➞ "y"
Notes
N/A */



function decrypt(s) {
  let str = ''
  s = s.split("")
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] == "#") {
      str = str + String.fromCharCode((97 + parseInt(s.slice(i, i + 3).join("").split('#').join("")) - 1))
      i += 2
    } else {
      str = str + String.fromCharCode((97 + parseInt(s[i])) - 1)
    }

  }
  return str
}

console.log(decrypt('25#'))