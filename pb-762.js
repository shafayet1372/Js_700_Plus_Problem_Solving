/* Muddled Middles
Given a sentence of all lowercase words, reverse all the letters in each word, but leave the first and last letters as they are.

Examples
mixMiddle("the quick brown fox jumps high") ➞ "the qciuk bworn fox jpmus hgih"

mixMiddle("this sentence is quite muddled") ➞ "tihs scnetnee is qtiue melddud"

mixMiddle("buying a first-class ticket") ➞ "bniyug a fsalc-tsris tekcit"
Notes
Treat hyphenated words like one word (example #3).
Notice how one, two and three-letter words remain unchanged! */

function mixMiddle(str) {
  let s = str.split(" ");
  return s.map((x) => {
    if (x.length > 3) {
      let first = x[0];
      let last = x[x.length - 1];
      return (
        first + x.slice(1, x.length - 1).split("").reverse().join("") + last
      );
    }
    return x;
  })
    .join(" ");
}

console.log(mixMiddle("the quick brown fox jumps high"));
