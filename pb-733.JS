/* Rhyme Time
Create a function that returns true if two lines rhyme and false otherwise. For the purposes of this exercise, two lines rhyme if the last 
word from each sentence contains the same vowels.

Examples
doesRhyme("Sam I am!", "Green eggs and ham.") ➞ true

doesRhyme("Sam I am!", "Green eggs and HAM.") ➞ true
// Capitalization and punctuation should not matter.

doesRhyme("You are off to the races", "a splendid day.") ➞ false

doesRhyme("and frequently do?", "you gotta move.") ➞ false
Notes
Case insensitive.
Here we are disregarding cases like "thyme" and "lime".
We are also disregarding cases like "away" and "today" (which technically rhyme, even though they contain different vowels). */

function doesRhyme(str1, str2) {
  let reg = /[aeoiu]/ig
  let s1 = str1.split(' ')
  let s2 = str2.split(' ')

  let v1 = s1[s1.length - 1].match(reg)
  let v2 = s2[s2.length - 1].match(reg)
  return v1.join("").toLowerCase() == v2.join("").toLowerCase()
}

console.log(doesRhyme("Sam I am!", "Green eggs and ham."))