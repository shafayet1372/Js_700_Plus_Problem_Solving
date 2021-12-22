/* Number to Google
Create a function that takes an array and returns a string.

0 Repeat the actual decrypted value (using like this : 014 to repeat 14 times).
Warning: When you start a repeat you can't stop it to add other numbers.
1, 2, 3, 4 = g, o, l, e
5 Corresponding to up case of letter before this.
6 Add a point to the end.
7 Change case of the first letter.
8 Reverse the string.
9 Clear the actual decrypted string.
Examples
numToGoogle(["12213467"]) ➞ "Google."

numToGoogle(["12213467", "321"]) ➞ "Google.log"

numToGoogle(["12213467", "321", "122906"]) ➞ "Google.log"

numToGoogle(["15", "2502", "15", 345]) ➞ "GOOGLE"

numToGoogle(["15", "2502", "15", 35, 45]) ➞ "GOOGLE"

numToGoogle([15, 202, 1, 3, 4]) ➞ "Google"
Notes
 */







function numToGoogle(arr) {

  let ch = {
    1: 'g', 2: 'o', 3: 'l', 4: 'e'
  }
  let clear, main = []
  for (let i = 0; i < arr.length; i++) {
    clear = false
    let newstr = []
    let ar1 = arr[i].toString().split("")

    for (let j = 0; j < ar1.length; j++) {
      if (ar1[j] == '1' || ar1[j] == '2' || ar1[j] == '3' || ar1[j] == '4') {
        newstr.push(ch[ar1[j]])
      } else if (ar1[j] == '5') {
        let val = newstr.join("").toUpperCase()
        newstr = []
        newstr = [...val.split("")]
      } else if (ar1[j] == '6') {
        newstr.push('.')
      } else if (ar1[j] == '7') {
        newstr[0] = newstr[0].toUpperCase()

      } else if (ar1[j] == '8') {
        newstr = newstr.reverse()
      } else if (ar1[j] == '9') {
        clear = true
        break;
      } else if (ar1[j] == '0') {
        newstr = [...newstr, ...newstr.slice(0, newstr.length)]
        break;
      }
    }
    if (!clear) {

      main = [...main, ...newstr]
    }
  }
  return main.join("")
}

console.log(numToGoogle(["12213467"]))