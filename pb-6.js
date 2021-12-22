/* Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
 */
function centuryFromYear(year) {
  let comp=year/100
  let century=Math.floor(year/100)
  if(century!=comp){
      return century+1
  }
  return century
}

console.log(centuryFromYear(1905))