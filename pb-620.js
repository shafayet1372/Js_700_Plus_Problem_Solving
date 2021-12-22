/* Stripping a Sentence Down
Create a function which takes in a sentence str and a string of characters chars and return the sentence but with all the specified characters removed.

Examples
stripSentence("the quick brown fox jumps over the lazy dog", "aeiou") ➞ "th qck brwn fx jmps vr th lzy dg"

stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s") ➞ "the hiing nake initerly lither acro the rutling leave"

stripSentence("gone, reduced to atoms", "go, muscat nerd") ➞ ""
Notes
You may be asked to remove punctuation and spaces.
Return an empty string if every charcter is specified (see example #3).
All tests will be in lowercase. */


function stripSentence(str, chars) {
  let s = str.split("")
  let char = chars.split("")
  for (let i = 0; i < char.length; i++) {
    let re = []
    // s=s.filter(val=>val!=char[i])
    for (let j = 0; j < s.length; j++) {
      if (char[i] != s[j]) {
        re.push(s[j])
      }
    }
    s = re
  }
  return s.join("")
}

console.log(stripSentence("gone, reduced to atoms", "go, muscat nerd"))