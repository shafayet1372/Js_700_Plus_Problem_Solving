/* Secret Function 4.0
Create a function based on the input and output. Look at the examples, there is a pattern.

Examples
secret("p.one.two.three") ➞ `<p class="one two three"></p>`

secret("p.one") ➞ `<p class="one"></p>`

secret("p.four.five") ➞ `<p class="four five"></p>`
Notes
Input is a string. */

function secret(text) {
  let s = text.split(".")
  let cls = ""
  for (let i = 1; i < s.length; i++) {
    cls = cls + s[i] + ' '
  }
  return `<${s[0]} class="${cls.trim()}"></${s[0]}>`
}

console.log(secret("p.one.two.three"))