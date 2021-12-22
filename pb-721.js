/* Changing a String into camelCase
Using Camel Case (or camelCase) is where the first word is in lower case, and all words after it have their first letter capitalised. 
Note that there are no spaces in between words!

Create a function that takes a string and returns it back in camelCase.

Examples
camelCasing("Hello World") ➞ "helloWorld"

camelCasing("snake_case") ➞ "snakeCase"

camelCasing("low high_HIGH") ➞ "lowHighHigh"
Notes
You need to remove all spaces and underscores.
There will be no numbers in inputs. */

function camelCasing(str) {
  let s = str.split("")
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '_' ||s[i]==' ') {
      s.splice(i, 1)
      s[i] = s[i].toUpperCase()
    } else {
      s[i] = s[i].toLowerCase()
    }
  }
  return s.join("")
}

console.log(camelCasing("hello world"))