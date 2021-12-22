/* Letters Shared between Two Words
Create a function that returns the number of characters shared between two words.

Examples
sharedLetters("apple", "meaty") ➞ 2
// Since "ea" is shared between "apple" and "meaty".

sharedLetters("fan", "forsook") ➞ 1

sharedLetters("spout", "shout") ➞ 4
Notes
N/A */

function sharedLetters(str1, str2) {
  let s1 = str1.split("")
  let s2 = str2.split("")

  
  let counter = 0
  let visited1 = [], visited2 = []
  for (let i = 0; i < s1.length; i++) {
    if (visited1.indexOf(i) == -1) {
      for (let j = 0; j < s2.length; j++) {
        if (s1[i] == s2[j] && visited2.indexOf(j) == -1) {
          counter++
          visited2.push(j)
        }

      }
    }
    visited1.push(i)
  }

  return counter

}

console.log(sharedLetters("hello", "loul"))