/* Calculate the Shortest Distance Between Two Points
Create a function that takes a string of four numbers. These numbers represent two separate points on a graph known as the x-axis (horizontal axis) and y-axis (vertical axis).

The order of coordinates in the string corresponds as follows:

"x1,y1,x2,y2"
Calculate the distance between x and y.

Examples
shortestDistance("1,1,2,1") ➞ 1

shortestDistance("1,1,3,1") ➞ 2

shortestDistance("-5,1,3,1") ➞ 8

shortestDistance("-5,2,3,1") ➞ 8.06
Notes
All floats fixed to two decimal places (e.g. 2.34 */

function shortestDistance(str) {
  let s = str.split(",")
  let x1 = parseInt(s[0])
  let y1 = parseInt(s[1])
  let x2 = parseInt(s[2])
  let y2 = parseInt(s[3])
  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  if (parseInt(distance) !== distance) {
    return parseFloat(distance.toFixed(2))
  }
  return distance
}

console.log(shortestDistance("1,1,2,1"))