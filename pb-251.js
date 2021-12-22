/* 
Digitaldrome
In this challenge, you have to establish if the digits of a given number form a sequence (ascending or descending).

Given an integer n, implement a function that returns a string:

"Metadrome" if the digits of n form an ascending sequence without repeating digits.
"Plaindrome" if the digits of n form an ascending sequence with repeating digits.
"Katadrome" if the digits of n form a descending sequence without repeating digits.
"Nialpdrome" if the digits of n form a descending sequence with repeating digits.
"Repdrome" if n contains a single repeating digit.
"Nondrome" if none of the above conditions is true.
Examples
digitaldrome(1357) ➞ "Metadrome"
// Ascending sequence without repeating digits

digitaldrome(12344) ➞ "Plaindrome"
// Ascending sequence with repeating digits

digitaldrome(7531) ➞ "Katadrome"
// Descending sequence without repeating digits

digitaldrome(9874441) ➞ "Nialpdrome"
// Descending sequence with  repeating digits

digitaldrome(666) ➞ "Repdrome"
// There's only a single repeating digit

digitaldrome(1985) ➞ "Nondrome"
// This is not a sequence
Notes
Any given n will be a positive integer.
The word "drome" comes from the Greek suffix for "run", while "kata" and "meta" are the prefixes for "down" (or "into") and "after" (or "through"). */



function digitaldrome(n) {
  let numbers = n.toString().split(''), rep = 1, visited = []
  let asc = parseInt(numbers.slice().sort((a, b) => parseInt(a) - parseInt(b)).join(''))
  let dsc = parseInt(numbers.slice().sort((a, b) => parseInt(b) - parseInt(a)).join(""))
  numbers.forEach((x, i) => {
    if (visited.indexOf(x) == -1) {
      numbers.forEach((y, j) => {
        if (x == y && i != j) {

          rep++
        }
      })
      visited.push(x)
    }
  })

  if ((asc == n || dsc == n) && rep == numbers.length) {
    return "Repdrome"
  } else if (asc == n && rep > 1) {
    return "Plaindrome"
  } else if (asc == n && rep == 1) {
    return "Metadrome"
  } else if (dsc == n && rep > 1) {
    return "Nialpdrome"
  } else if (dsc == n && rep == 1) {
    return "Katadrome"
  }
  return "Nondrome"
}

console.log(digitaldrome(666))