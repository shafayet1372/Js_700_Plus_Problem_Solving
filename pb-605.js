/* The Reverser!
The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

Examples
reverse("Hello World") ➞ "DLROw OLLEh"

reverse("ReVeRsE") ➞ "eSrEvEr"

reverse("Radar") ➞ "RADAr"
Notes
There will be no punctuation in any of the test cases. */

function reverse(str) {
  let newStr = ""
  let s = str.split("")
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i].toLowerCase() == s[i]) {
      newStr += s[i].toUpperCase()
    } else {
      newStr += s[i].toLowerCase()
    }
  }
  return newStr
}

console.log(reverse("Hello World"))