/* Return the End Letters of Numbers
Create a function that takes an integer and returns it as an ordinal number. An Ordinal Number is a number that tells the position of something in a list,
 such as 1st, 2nd, 3rd, 4th, 5th, etc.

Examples
returnEndOfNumber(553) ➞ "553-RD"

returnEndOfNumber(34) ➞ "34-TH"

returnEndOfNumber(1231) ➞ "1231-ST"

returnEndOfNumber(22) ➞ "22-ND"

returnEndOfNumber(412) ➞ "412-TH"
Notes
Check the Resources tab for more info on ordinal numbers. */

function returnEndOfNumber(num) {
  let ordinal = { "1": "ST", "2": "ND", "3": "RD" }
  let s = num.toString().split("")
  let lastNum = s[s.length - 1]
 
  if (ordinal[lastNum]) {
  
    let rank=s[s.length-2]=='1'?"TH":ordinal[lastNum]
    return num.toString() + '-' + rank
  }
  return num.toString() + '-TH'
}

console.log(returnEndOfNumber(12341))