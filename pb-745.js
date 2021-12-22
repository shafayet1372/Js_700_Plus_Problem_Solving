/* Words With Duplicate Letters
Given a common phrase, return false if any individual word in the phrase contains duplicate letters. Return true otherwise.

Examples
noDuplicateLetters("Fortune favours the bold.") ➞ true

noDuplicateLetters("You can lead a horse to water, but you can't make him drink.") ➞ true

noDuplicateLetters("Look before you leap.") ➞ false
// Duplicate letters in "Look" and "before".

noDuplicateLetters("An apple a day keeps the doctor away.") ➞ false
// Duplicate letters in "apple", "keeps", "doctor", and "away".
Notes
Letter matches are case-insensitive. */

function noDuplicateLetters(phrase) {

  return phrase.toLowerCase().split(" ").every(x => [...new Set(x.split(""))].length == x.length)
}

console.log(noDuplicateLetters("Fortune favours the bold."))