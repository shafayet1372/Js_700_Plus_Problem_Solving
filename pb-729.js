/* Average Word Length
Create a function that takes in a sentence and returns the average length of each word in that sentence. Round your result to two decimal places.

Examples
averageWordLength("A B C.") ➞ 1.00

averageWordLength("What a gorgeous day.") ➞ 4.00

averageWordLength("Dude, this is so awesome!") ➞ 3.80
Notes
Ignore punctuation when counting the length of a word. */

function averageWordLength(str) {
  let s = str.replace(/[\.\?!,]/g, '').split(" ")

  return Math.round((s.reduce((acc, val) => { return acc + val.length }, 0) / s.length) * 100) / 100
}

console.log(averageWordLength(('Dude, this is so awesome!')))