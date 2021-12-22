/* ASCII Charts (Part 1: Progress Bar)
Given a character and a value between 0 and 100, return a string that represents a simple progress bar.

The value represents a percentage.
The bar should begin and end with "|"
Repeat the character to fill the bar, with each character equivalent to 10%
Use spaces to pad the bar to a length of 10 characters.
A single space comes after the bar, then a message with the % of completion (e.g. "Progress: 60%")
If the value is 100, the message should be "Completed!".
Examples
progressBar("#", 0) ➞ "|          | Progress: 0%"

progressBar("=", 40) ➞ "|====      | Progress: 40%"

progressBar("#", 60) ➞ "|######    | Progress: 60%"

progressBar(">", 100) ➞ "|>>>>>>>>>>| Completed!"
Notes
N/A */

function progressBar(bar, progress) {
  let len = (progress / 100) * 10
  let str = bar.repeat(len)
 
  return `|${str}${' '.repeat(10-str.length)}| ${len<10?`Progress: ${progress}%`:`Completed!`}`
}

let v=progressBar("=", 10)
console.log(v.split(""))