/* Prefixes vs. Suffixes
Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

isPrefix should return true if it begins with the prefix argument.
isSuffix should return true if it ends with the suffix argument.
Otherwise return false.

Examples
isPrefix("automation", "auto-") ➞ true

isSuffix("arachnophobia", "-phobia") ➞ true

isPrefix("retrospect", "sub-") ➞ false

isSuffix("vocation", "-logy") ➞ false
Notes
The prefix and suffix arguments have dashes - in them.
 */



function isPrefix(word, prefix) {
  word = word.split("")
  prefix = prefix.split("")
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i] == '-') {
      return true
    } else if (word[i] !== prefix[i]) {
      return false

    }
  }
}
function isSuffix(word, suffix) {
  word = word.split("")
  suffix = suffix.split("")
  let l = word.length - 1
  for (let i = suffix.length - 1; i >= 0; i--) {

    if (suffix[i] == '-') {
      return true
    } else if (word[l] !== suffix[i]) {
      return false

    }
    l--
  }
}

console.log(isPrefix("retrospect", "sub-"))
console.log(isSuffix("arachnophobia", "-phobia"))