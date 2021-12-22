/* 
In this challenge, it's time to ban some impenitent digit!

Your job is to delete the digits of a given number that, within their name written in English, contain a given vowel.

Given an integer n, and a string ban being the vowel to search, implement a function that returns:

If the given vowel is not present in the name of any of the digits of n, the same n.
If n has at least a digit that contains the given vowel in its name, the new integer obtained after the elimination of banned digits 
(as a natural number without leading zeros).
If all digits of n are banned, a string "Banned Number".
Examples
digitalVowelBan(143, "o") ➞ 3
// 1 = "One" contains "o" (banned).
// 4 = "Four" contains "o" (banned).
// 3 = "Three" is safe.

digitalVowelBan(14266330, "e") ➞ 4266
// "One" contains "e" (banned).
// "Four", "Two" and "Six" are safe.
// "Three" and "Zero" contain "e" (banned).

digitalVowelBan(4020, "u") ➞ 20
// "Four" contains "u" (banned).
// Leading zeros are not considered.

digitalVowelBan(586, "i") ➞ "Banned Number"
// All digits ("Five, "Eight", "Six") contain "i".
Notes
Every given number will be a positive integer greater than 0. */








let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']


function digitalVowelBan(n, ban) {
  let allNumber = n.toString().split("")
  let result = []
  for (let i = 0; i < allNumber.length; i++) {
    let rege = new RegExp(`${(ban)}`, 'gi')
    if (!rege.test(numbers[parseInt(allNumber[i])])) {
      result.push(allNumber[i])
    }


  }

  return result.length == 0 ? "Banned Number" : parseInt(result.join(""))
}

console.log(digitalVowelBan(143, "o"))