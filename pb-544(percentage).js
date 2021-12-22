/* Percentage of Box Filled In
Create a function that calculates what percentage of the box is filled in. Give your answer as a string percentage rounded to the nearest integer.

Examples
percentFilled([
  "####",
  "#  #",
  "#o #",
  "####"
]) ➞ "25%"

// One element out of four spaces.

percentFilled([
  "#######",
  "#o oo #",
  "#######"
]) ➞ "60%"

// Three elements out of five spaces.

percentFilled([
  "######",
  "#ooo #",
  "#oo  #",
  "#    #",
  "#    #",
  "######"
]) ➞ "31%"

// Five elements out of sixteen spaces.
Notes
Only "o" will fill the box and also "o" will not be found outside of the box.
Don't focus on how much physical space an element takes up, pretend that each element occupies one whole unit (which you can judge according to the
 number of "#" on the sides). */


function percentFilled(box) {
  let counter = 0
  for (let i = 0; i < box.length; i++) {
    if (i != 0 && i != box.length - 1) {
      let val = box[i].split("")
      for (let j = 0; j < val.length; j++) {
        if (val[j] == 'o') {
          counter++
        }
      }
    }
  }
  let total = (box.length - 2) * (box[0].length - 2)
  return Math.round((counter / total) * 100) + "%"
}

console.log(percentFilled([
  "####",
  "#  #",
  "#o #",
  "####"
]))