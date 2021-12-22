/* Censor Words Longer Than Four Characters
Create a function that takes a string and censors words over four characters with *.

Examples
censor("The code is fourty") ➞ "The code is ******"

censor("Two plus three is five") ➞ "Two plus ***** is five"

censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"
Notes
Don't censor words with exactly four characters.
If all words have four characters or less, return the original string.
The amount of * is the same as the length of the word.
 */


function censor(str) {
  let s = str.split(" ")
  for (let i = 0; i < s.length; i++) {
    if (s[i].length > 4) {
      s[i] = '*'.repeat(s[i].length)
    }
  }
  return s.join(" ")
}

console.log(censor("The code is fourty"))