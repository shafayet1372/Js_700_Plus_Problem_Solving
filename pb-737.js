/* Uban Numbers
A number n is called uban if its name (in English) does not contain the letter "u". In particular, it cannot contain the terms "four", 
"hundred", and "thousand", so the uban number following 99 is 1,000,000.

Write a function to determine if the given integer is uban.

Examples
isUban(456) ➞ false

isUban(25) ➞ true

isUban(1098) ➞ false
Notes
N/A */

function isUban(num) {
  if ((!num.toString().includes('4') || num == 40) && (num >= 0 && num < 99) || (num > 10000)) {
    return true
  }
  return false
}

console.log(isUban(40))