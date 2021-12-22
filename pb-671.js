/* Amazing Alliteration
Alliteration refers to a sequence of words that begin with the same letter. For this exercise, a sentence is correctly alliterated if all words 
strictly greater than 3 characters begin with the same letter.

Examples
alliterationCorrect("She swam to the shore.") ➞ true
// All words >= 4 letters long begins with "s"

alliterationCorrect("Maybel manages money well.") ➞ false
// "well" does not begin with an "m"

alliterationCorrect("He helps harness happiness.") ➞ true

alliterationCorrect("There are many animals.") ➞ false
Notes
Check the resources tab for a better explanation of alliteration.
This is to allow for filler words such as "the", "to", "a", etc. - so words with three or fewer characters are not counted.
Punctuation does not count as part of a word's length. */

function alliterationCorrect(sentence) {
  let s = sentence.replace('.', '').toLowerCase().split(" ")
  let char = s[0].split("")[0]

  return s.every(x => {
    let val = x.split("")[0]
    if (x.length > 3 && char == val) {
      return true
    } else if (x.length <= 3) {
      return true
    }
    return false
  })

}

console.log(alliterationCorrect("She swam to the shore."))