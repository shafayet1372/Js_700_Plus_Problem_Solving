/* Count Substring
Implement a function count_substring that counts the number of substrings that begin with character "A" and ends with character "X".

For example, given the input string "CAXAAYXZA", there are four substrings that begin with "A" and ends with "X", namely: "AX", "AXAAYX", "AAYX", and "AYX".

Examples
countSubstring("CAXAAYXZA") ➞  4

countSubstring("AAXOXXA") ➞ 6

countSubstring("AXAXAXAXAX") ➞ 15
Notes
You should aim to avoid using nested loops to complete the task.
You can assume that the input string is composed of English upper case letters only.
 */


function countSubstring(s) {
  let str = s.split("")
  let counter = 0
 
  for (let i = 0; i < str.length; i++) {
    let newStr = ''
    if (str[i] == 'A') {
      console.log(i)
      for (let j = i; j < str.length; j++) {
        newStr += str[j]

        if (newStr.length > 1 && (newStr.charAt(0) == "A" && newStr.charAt(newStr.length - 1) == 'X')) {
          counter++

        }
      }
    }
  }
  return counter
}

console.log(countSubstring("AAXOXXA"))