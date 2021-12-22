/* Wrap Around
Create a function to reproduce the wrap around effect shown:

Examples
wrapAround("Hello, World!", 2) ➞ "llo, World!He"

wrapAround("From what I gathered", -4) ➞ "eredFrom what I gath"

wrapAround("Excelsior", 30) ➞ "elsiorExc"

wrapAround("Nonscience", -116) ➞ "cienceNons"
Notes
The offset can be negative.
The offset can be greater than the length of string */

function wrapAround(string, offset) {
  if (!offset) {
    return string;
  }
  let len = Math.abs(offset);
  let s = string.split("");
  for (let i = 0; i < len; i++) {
    let val;
    if (offset > 0) {
      val = s.shift();
      s.push(val);
    } else {
      val = s.pop();
      s.unshift(val);
    }
  }
  return s.join("");
}

console.log(wrapAround("No Changes", 0));
