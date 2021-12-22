/* Number of Leap Years
Given a range of years as a string, return the number of leap years there are within the range (inclusive).

Examples
numLeapYears("1980-1984") ➞ 2
// 1980 and 1984 are leapyears.

numLeapYears("2000-2020") ➞ 6

numLeapYears("1600-2000") ➞ 98
Notes
Remember that a hyphen separates the years.
Check the Resources tab for help on checking whether a year is a leap year */

function numLeapYears(years) {
  let y = years.split("-")
  let start = parseInt(y[0])
  let end = parseInt(y[1])
  let counter = 0
  for (start; start <= end; start++) {

    if ((start % 400 == 0) || (start % 100 != 0 && start % 4 == 0)) {
      counter++
    }
  }
  return counter
}

console.log(numLeapYears("1600-2000"))