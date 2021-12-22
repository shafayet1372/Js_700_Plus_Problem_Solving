/* Box Completely Filled?
Create a function that checks if the box is completely filled with the asterisk symbol *.

Examples
completelyFilled([
  "#####",
  "#***#",
  "#***#",
  "#***#",
  "#####"
]) ➞ true

completelyFilled([
  "#####",
  "#* *#",
  "#***#",
  "#***#",
  "#####"
]) ➞ false

completelyFilled([
  "###",
  "#*#",
  "###"
]) ➞ true

completelyFilled([
  "##",
  "##"
]) ➞ true
Notes
Boxes of size n <= 2 are considered automatically filled (see example #4).
Empty space will always be a space character (" "). */

function completelyFilled(arr) {
  if (arr[0].length <= 2) {
    return true
  }
  let totalStar = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[\*]/g)) {
      totalStar += arr[i].match(/[\*]/g).length
    }
  }

  return totalStar / ((arr[0].length - 2) * (arr.length - 2))==1
}
console.log(completelyFilled([
  "###", 
  "#*#", 
  "###"
]))