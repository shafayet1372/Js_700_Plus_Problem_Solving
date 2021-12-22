/* Back to Home?
Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. 
Determine whether a set of directions will lead him back to the starting position or not.

Examples
backToHome("EEWE") ➞ false

backToHome("NENESSWW") ➞ true

backToHome("NEESSW") ➞ false
Notes
N/A
 */

function backToHome(directions) {
  let d = directions.split(""), start
  let counter1 = 0, counter2 = 0
  for (let i = 0; i < d.length; i++) {
    if (i == 0) {
      counter1++
      start = d[i]
    } else if ((d[0] == 'E' && d[i] == 'W') || (d[0] == 'W' && d[i] == 'E')) {

      counter2++
    } else if ((d[0] == 'N' && d[i] == 'S') || (d[0] == 'S' && d[i] == 'N')) {

      counter2++
    } else if (d[i] == start) {
      counter1++
    }
  }

  return counter1 == counter2
}

console.log(backToHome("NEESSW"))