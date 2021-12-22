/* Dashed Vowels
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples
dashed("Edabit") ➞ "-E-d-a-b-i-t"

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
Y is not considered a vowel */


function dashed(str) {
  let s = str.split('')
  let result = ''

  for (let i = 0; i < s.length; i++) {
    if (/[aeiou]/i.test(s[i])) {
      result = result + `-${s[i]}-`
    } else {
      result += s[i]

    }
  }
  return result
}

console.log(dashed("Carpe Diem"))