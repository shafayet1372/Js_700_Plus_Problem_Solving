/* Grab the Numbers
Given a string including a bunch of characters and numbers, return the sum of all the numbers in the string. Note that multiple digits next 
to each other are counted as a whole number rather than separate digits.

Examples
grabNumberSum("aeiou250abc10") ➞ 260

grabNumberSum("one1two2twenty20") ➞ 23

grabNumberSum("900uwu50uwuuwuuwu25uwu25") ➞ 1000
Notes
Remember not to just add single digit numbers together, it should be possible for answers to easily get into the 100s!
 */

function grabNumberSum(s) {
  let num = s.match(/\d+/g)
  return num.reduce((acc, val) => { return acc + parseInt(val) }, 0)
}

console.log(grabNumberSum("aeiou250abc10"))