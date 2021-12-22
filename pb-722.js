/* Same on Both Ends
Given a sentence, return the number of words which have the same first and last letter.

Examples
countSameEnds("Pop! goes the balloon") ➞ 1

countSameEnds("And the crowd goes wild!") ➞ 0

countSameEnds("No I am not in a gang.") ➞ 1
Notes
Don't count single character words (such as "I" and "A" in example #3).
The function should not be case sensitive, meaning a capital "P" should match with a lowercase one.
Mind the punctuation!
Bonus points indeed for using regex!
 */
function countSameEnds(str) {
  let s = str.toLowerCase().split(/\W/g)
  let counter = 0

  for (let i = 0; i < s.length; i++) {
    let val = s[i].split("")
    if ((val[0] == val[val.length - 1]) && val.length>1) {
      counter++
    }
  }
  return counter
}

console.log(countSameEnds("My mom is not a nun."))