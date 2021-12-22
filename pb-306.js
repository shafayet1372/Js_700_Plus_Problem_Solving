/* Simple Encoder
Create a function that takes a string str and performs simple encoding as per the following method:

Replace all single occurrence characters with [
Replace all characters with two or more occurrences with ]
Return the final string after modification.

Examples
simpleEncoder("Mubashir") ➞ "[[[[[[[["
// '[' for each character

simpleEncoder("Matt") ➞ "[[]]"
// ']' for both 't'

simpleEncoder("eD  aBiT") ➞ "[[]][[[["
// Two spaces in between
Notes
Strings can contain lower and uppercase letters. Treat them equally (i.e. A = a, B = b).
Spaces are also characters. */





function simpleEncoder(str) {
  let s = str.toLowerCase().split(""), visited = [], result = []
  for (let i = 0; i < s.length; i++) {
    let counter = 0, index = []
    if (visited.indexOf(s[i]) == -1) {
      for (let j = 0; j < s.length; j++) {
        if (s[i] == s[j]) {
          counter++
          index.push(i)
        }
      }
    }
    if (counter >= 2) {
      for (let l = 0; l < index.length; l++) {
        result[index[l]] = ']'
      }
    } else {
      result[i] = '['
    }
  }
  return result.join("")

}

console.log(simpleEncoder("Mu ba sh ir Ha ss an"))