/* Mumbling Challenge
Create a function that takes a string str and modifies the given string as per the below examples:

Examples
mumbling("MubAshIr") ➞ "M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr"

mumbling("maTT") ➞ "M-Aa-Ttt-Tttt"

mumbling("EdaBit") ➞ "E-Dd-Aaa-Bbbb-Iiiii-Tttttt"
Notes
N/A
 */
function mumbling(str) {
  let s = str.split("")
  for (let i = 0; i < s.length; i++) {
    if (i == 0) {
      s[i] = s[i].toUpperCase()
    } else {
      s[i] = s[i].toUpperCase() + s[i].toLowerCase().repeat(i)
    }
  }
  return s.join('-')
}

console.log(mumbling("MubAshIr"))