/* Counting Adverbs
Create a function that counts the number of adverbs in a sentence. An adverb is a word that ends with ly.

Examples
countAdverbs("She ran hurriedly towards the stadium.") ➞ 1

countAdverbs("She ate the lasagna heartily and noisily.") ➞ 2

countAdverbs("He hates potatoes.") ➞ 0

countAdverbs("He was happily, crazily, foolishly over the moon.") ➞ 3
Notes
Do NOT count words where the ly is in the beginning or the middle (e.g. Lysol, Illya).
For the purpose of this exercise, ignore the nuances of the English language (some adjectives also end in ly). */

function countAdverbs(sentence) {
  let s = sentence.split(/[\s+,\.]/)
  let counter = 0, counter2
  for (let i = 0; i < s.length; i++) {
    let val = s[i].split('')
    counter2 = 0
    for (let j = val.length - 1; j >= 0; j--) {
      if (counter2 == 2) {
        break
      }
      if (val[j] == 'l' || val[j] == 'y') {
        counter2++
      } else {
        break
      }

    }

    if (counter2 == 2) {
      counter++
    }
  }
  return counter
}

console.log(countAdverbs("She writes poetry beautifully."))