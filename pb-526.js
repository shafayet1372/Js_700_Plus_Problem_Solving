/* 
Read the Abacus (Part 1: Russian Schoty)
The Russian schoty is type of abacus (counting tool) that is used by sliding threaded beads along horizontal wires. An example schoty would have 
7 wires, each holding 10 beads. Each bead, when moved to the left, would count as 1 unit. Starting from the bottom wire and moving up, the units increase by a factor of 10. If we use "O" for a bead and "-" to show the wire, we can represent the schoty as follows:

---OOOOOOOOOO  millions
---OOOOOOOOOO  hundred-thousands
---OOOOOOOOOO  ten-thousands
---OOOOOOOOOO  thousands
---OOOOOOOOOO  hundreds
---OOOOOOOOOO  tens 
---OOOOOOOOOO  ones
To read the number, we count the beads on the left-hand side of each wire. In the example below, the number is 501264:

---OOOOOOOOOO  0
OOOOO---OOOOO  5
---OOOOOOOOOO  0
O---OOOOOOOOO  1
OO---OOOOOOOO  2
OOOOOO---OOOO  6
OOOO---OOOOOO  4
Given an array of strings representing each wire in the schoty, return the number being displayed.

Examples
schoty([
  "---OOOOOOOOOO",
  "---OOOOOOOOOO",
  "---OOOOOOOOOO",
  "OOO---OOOOOOO",
  "O---OOOOOOOOO",
  "OOOOOOOOO---O",
  "OO---OOOOOOOO"
]) ➞ 3192

schoty([
  "OO---OOOOOOOO",
  "O---OOOOOOOOO",
  "OOOOO---OOOOO",
  "---OOOOOOOOOO",
  "---OOOOOOOOOO",
  "---OOOOOOOOOO",
  "---OOOOOOOOOO"
]) ➞ 2150000
Notes
For more info on how to use a schoty, please check the Resources tab. This challenge ignores the traditional 4-bead wires used for quarter-ruble and quarter-kopek
 calculations
 */

function schoty(frame) {

  let countAr = []
  for (let i = 0; i < frame.length; i++) {
    let num = frame[i].indexOf('-')
    if (!countAr.length && num > 0) {
      countAr.push(num)
    } else if (countAr.length) {
      countAr.push(num)
    }


  }
  return parseInt(countAr.join(""))
}

console.log(schoty([
  "---OOOOOOOOOO",
  "---OOOOOOOOOO",
  "---OOOOOOOOOO",
  "OOO---OOOOOOO",
  "O---OOOOOOOOO",
  "OOOOOOOOO---O",
  "OO---OOOOOOOO"
]))