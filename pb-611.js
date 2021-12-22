/* Shhh Be Quiet Function
Write a function that removes all capitals letters from a sentence except the first letter, put quotation marks around the sentence and 
add ", whispered Edabit." to the end.

Examples
shhh("HI THERE!") ➞ '"Hi there!", whispered Edabit.'

shhh("tHaT'S Pretty awesOme") ➞ '"That's pretty awesome", whispered Edabit.'

shhh("") ➞ '"", whispered Edabit.'
Notes
Don't forget to surround the original string with double quotation marks "". */


function shhh(sentence) {
  let s = sentence.split("")
  for (let i = 0; i < s.length; i++) {
    if (i != 0) {
      s[i] = s[i].toLowerCase()
    } else {
      s[i] = s[i].toUpperCase()
    }
  }
  return `"${s.join("")}", whispered Edabit.`
}

console.log(shhh("tHaT'S Pretty awesOme"))