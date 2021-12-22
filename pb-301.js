/* What's Hiding Amongst the Crowd?
A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
Examples
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
Notes
N/A

 */


function detectWord(str) {
  let s = str.split("")
  return s.reduce((acc, val) => {
    if (val.toLowerCase() == val) {
      acc = acc + val
    }
    return acc
  }, '')
}

console.log(detectWord("UcUNFYGaFYFYGtNUH"))