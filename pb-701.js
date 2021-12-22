/* Count a Specific Digit

Write a function that counts the number of times a specific digit occurs in a range (inclusive). The function will look like:

digitOccurrences(min, max, digit) ➞ number of times digit occurs

Examples

digitOccurrences(51, 55, 5) ➞ 6
// [51, 52, 53, 54, 55] : 5 occurs 6 times

digitOccurrences(1, 8, 9) ➞ 0

digitOccurrences(-8, -1, 8) ➞ 1

digitOccurrences(71, 77, 2) ➞ 1

Notes

    Ranges can be negative.
    min <= max */

function digitOccurrences(min, max, digit) {
  let counter = 0

  for (let i = min; i <= max; i++) {
    let reg = new RegExp(`${digit}`, 'g')
    if (reg.test(i.toString()))
      counter += i.toString().match(reg).length
  }
  return counter
}

console.log(digitOccurrences(-8, -1, 8))