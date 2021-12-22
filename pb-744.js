/* 💥repeatedrepeatedrepeated💥
This challenge concerns strings such as:

"repeatedrepeatedrepeated"
... that are obtained by repeating a smaller string, which in this case is the string "repeated".

On a related note, since the string above is made of 3 repetitions, one way to produce this string is via the code "repeated".repeat(3).

Write a function that, given a string, either:

Returns false if the string isn't made by repeating a smaller string or ...
Returns the number of repetitions if the string repeats a smaller string.
Examples
isRepeated("repeatedrepeatedrepeated") ➞ 3

isRepeated("overintellectualizations") ➞ False

isRepeated("nononononononononononono") ➞ 12

isRepeated("moremoremoremoremoremore") ➞ 6

isRepeated(",,,,,,,,,,,,,,,,,,,,,,,,") ➞ 24
Notes
To keep things a little simpler, all strings in the tests will have length exactly 24, just as in all the examples above. In particular, the answers will always be divisors of 24. */


function isRepeated(strn) {
  let counter = 0
  let str = ""
  for (let i = 0; i < strn.length; i++) {
    str += strn[i]
    if (str.repeat(1) == strn.slice(i + 1, i + (str.length + 1))) {
      counter++
      str = ''
    }
  }
  return counter >= 1 ? counter + 1 : false
}

console.log(isRepeated(",,,,,,,,,,,,,,,,,,,,,,,,"))