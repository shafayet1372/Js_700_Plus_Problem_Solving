/* Fix the Spacing
Additional spaces have been added to a sentence. Return the correct sentence by removing them. All words should be separated by one space,
 and there should be no spaces at the beginning or end of the sentence.

Examples
correctSpacing("The film   starts       at      midnight. ")
➞ "The film starts at midnight."

correctSpacing("The     waves were crashing  on the     shore.   ")
➞ "The waves were crashing on the shore."

correctSpacing(" Always look on    the bright   side of  life.")
➞ "Always look on the bright side of life."
Notes
N/A */

function correctSpacing(sentence) {
  let s = sentence.split(" ")
  let result = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] != '') {
      result.push(s[i])
    }
  }
  return result.join(" ")
}

console.log(correctSpacing("The film   starts       at      midnight. "))