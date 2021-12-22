/* 
Check If It's a Title String
Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

Examples
checkTitle("A Mind Boggling Achievement") ➞ true

checkTitle("A Simple Java Script Program!") ➞ true

checkTitle("Water is transparent") ➞ false
Notes
N/A
 */



function checkTitle(title) {
  let s = title.split("")

  for (let i = 0; i < title.length; i++) {
    if (i == 0 && s[i].toUpperCase() !== s[i]) {
      return false
    } else if (s[i - 1] == ' ' && s[i].toUpperCase() !== s[i]) {
      return false
    }
  }
  return true
}

console.log(checkTitle("A Mind Boggling Achievement"))