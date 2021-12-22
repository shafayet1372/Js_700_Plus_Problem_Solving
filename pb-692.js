/* Blah, Blah, Blah...
Create a function which replaces the last n words with "blah". Add "..." to the last blah.

Examples
blahBlah("A function is a block of code which only runs when it is called",  5) ➞ "A function is a block of code which only blah blah blah blah blah..."

blahBlah("one two three four five", 2) ➞ "one two three blah blah..."

blahBlah("Sphinx of black quartz judge my vow", 10) ➞ "blah blah blah blah blah blah blah..."
Notes
If n is longer than the amount of words in the sentence, replace every word with "blah" (see example #3).
All blahs shall be lowercase!
 */

function blahBlah(str, n) {
  let s = str.split(" ")
  if (n > s.length) {
    str = str.replace(/\w+/g, 'blah')
    return str + '...'
  }
  let len = s.length - 1
  for (let i = s.length - 1; i > len - n; i--) {
    if (i == s.length - 1) {
      s[i] = 'blah...'
    } else {
      s[i] = 'blah'
    }
  }
  return s.join(" ")
}

console.log(blahBlah("A function is a block of code which only runs when it is called", 5))