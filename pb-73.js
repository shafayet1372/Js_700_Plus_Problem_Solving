/* Given a string, enclose it in round brackets.

Example

For inputString = "abacaba", the output should be
encloseInBrackets(inputString) = "(abacaba)" */

function encloseInBrackets(inputString) {
let str=inputString.split("")
str.unshift("(")
str.push(")")
return str.join("")
}


console.log(encloseInBrackets('abcde'))