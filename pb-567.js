/* Convert "Zero" and "One" to "1" and "0"

Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's 
words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.
Examples

textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"

textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"

textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"

textToNumberBinary("zero one zero one zero one zero three") ➞ ""

textToNumberBinary("one one") ➞ ""

Notes

You must return the result as a string. */



function textToNumberBinary(str) {
  let obj = {
    'zero': 0, 'one': 1
  }
  let result = [], s = str.split(" ")
  for (let i = 0; i < s.length; i++) {
    let val=s[i].toLowerCase()
    if (obj[val] || obj[val] == 0) {
      result.push(obj[val])
    }
  }
  if (result.length < 8) {
    return ''
  }
 
  return result.length%8==0?result.join(""):result.slice(0,result.length-(result.length%8)).join("")
}

console.log(textToNumberBinary("one Zero zero one zero zero one one one one one zero oNe one one zero one zerO"))