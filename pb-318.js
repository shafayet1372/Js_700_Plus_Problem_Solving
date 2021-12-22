/* Reverse the Case
Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

Examples
reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

reverseCase("MANY THANKS") ➞ "many thanks"

reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"
Notes
N/A */




function reverseCase(str) {
  let s = str.split("")
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() == s[i]) {
      s[i] = s[i].toUpperCase()
    } else {
      s[i] = s[i].toLowerCase()
    }
  }
  return s.join("")
}

console.log(reverseCase("Happy Birthday"))