/* Amateur Hour

Write a function that takes time t1 and time t2 and returns the number of hours passed between the two times.
Examples

hoursPassed("3:00 AM", "9:00 AM") ➞ "6 hours"

hoursPassed("2:00 PM", "4:00 PM") ➞ "2 hours"

hoursPassed("1:00 AM", "3:00 PM") ➞ "14 hours"

Notes

    Time t1 will always be the starting time and t2, the ending time.
    Return the string "no time passed" if t1 is equal to t2. */

function hoursPassed(t1, t2) {
  if (t1 == t2) {
    return "no time passed"
  }
  let ti1 = t1.split(' ')
  let ti2 = t2.split(" ")

  if (ti1[1] == ti2[1]) {
    return `${parseInt(ti2[0]) - parseInt(ti1[0])} hours`
  } else if (ti1[1] == 'AM') {
    return `${parseInt(ti1[0]) != 12 ? (12 - (parseInt(ti1[0])) + parseInt(ti2[0])) : parseInt(ti2[0]) + parseInt(ti1[0])} hours`
  }


}

console.log(hoursPassed("1:00 AM", "3:00 PM"))