Even or Odd: Which is Greater?
Create a function to determine if the sum of all the individual even digits are greater than the sum of all the individual odd /* digits in a string of numbers.

If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
If the sum of both even and odd numbers are equal, return "Even and Odd are the same".
Examples
evenOrOdd("22471") ➞ "Even and Odd are the same"

evenOrOdd("213613") ➞ "Even and Odd are the same"

evenOrOdd("23456") ➞ "Even is greater than Odd"
Notes
The input will be a string of numbers. */

function evenOrOdd(str) {
  let s = str.split('')
  let odd = 0, evn = 0
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) % 2 == 0) {
      evn += parseInt(s[i])
    } else {
      odd += parseInt(s[i])
    }
  }
  if (odd == evn) {
    return "Even and Odd are the same"
  } else if (odd > evn) {
    return "Odd is greater than Even"
  } else {
    return "Even is greater than Odd"
  }
}

console.log(evenOrOdd('22471'))