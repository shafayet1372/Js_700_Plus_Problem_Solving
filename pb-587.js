/* Neutralisation
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Worked Example
neutralise("+-+", "+--") ➞ "+-0"
// Compare the first characters of each string, then the next in turn.
// "+" against a "+" returns another "+".
// "-" against a "-" returns another "-".
// "+" against a "-" returns "0".
// Return the string of characters.
Examples
neutralise("--++--", "++--++") ➞ "000000"

neutralise("-+-+-+", "-+-+-+") ➞ "-+-+-+"

neutralise("-++-", "-+-+") ➞ "-+00"
Notes
The two strings will be the same length. */

function neutralise(s1, s2) {

/* 
//short way
let str1=s1.split("")
  let str2=s2.split("")
  return str1.map((val,i)=>{
    if(val==str2[i]){
      return val
    }
    return 0
  }).join("") */
  let str1 = s1.split("")
  let str2 = s2.split("")
  let result = []
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == str2[i]) {
      result[i] = str1[i]
    } else {
      result[i] = 0
    }
  }
  return result.join("")
}

console.log(neutralise("+-+", "+--"))