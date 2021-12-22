/* Capital Split
Create a function which adds spaces before every capital in a word. Uncapitalize the whole string afterwards.

Examples
capSpace("helloWorld") ➞ "hello world"

capSpace("iLoveMyTeapot") ➞ "i love my teapot"

capSpace("stayIndoors") ➞ "stay indoors"
Notes
The first letter will stay uncapitalized. */

function capSpace(txt) {
  let result = []
  let s = txt.split("")
  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() == s[i]) {
      result.push(" ")
      result.push(s[i])
    } else {
      result.push(s[i])
    }
  }
  return result.join("").toLowerCase()
}

console.log(capSpace("helloWorld"))