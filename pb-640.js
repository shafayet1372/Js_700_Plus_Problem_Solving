/* Change Every Letter to the Next Letter
Write a function that changes every letter to the next letter:

"a" becomes "b"
"b" becomes "c"
"d" becomes "e"
and so on ...
Examples
move("hello") ➞ "ifmmp"

move("bye") ➞ "czf"

move("welcome") ➞ "xfmdpnf"
Notes
There will be no z's in the tests.
 */

function move(word) {
  let s = word.split("")
  return s.map(val => String.fromCharCode(val.charCodeAt(0) + 1)).join("")
}

console.log(move("hello"))