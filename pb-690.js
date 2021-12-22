/* Smiley Faces :)
You will be given a string of characters containing only the following characters: ():

Create a function returns a number based on the number of sad and smiley faces there is.

The happy faces :) and (: are worth 1.
The sad faces :( and ): are worth -1.
Working Example
happinessNumber(":):(") ➞ -1
// The first 2 characters are :)        +1      Total: 1
// The next 2 are ):                    -1      Total: 0
// The last 2 are :(                    -1       Total: -1
Examples
happinessNumber(":):(") ➞ -1

happinessNumber("(:)") ➞ 2

happinessNumber("::::") ➞ 0
Notes
All test cases will be valid.
 */

function happinessNumber(s) {
  let str = s.split("")
  let counter = 0
  for (let i = 0; i < str.length; i++) {
    if ((str[i] == ':' && str[i + 1] == ")") || (str[i] == '(' && str[i + 1] == ':')) {
      counter++
    } else if ((str[i] == ':' && str[i + 1] == "(") || (str[i] == ')' && str[i + 1] == ':')) {
      counter--
    }
  }
  return counter
}

console.log(happinessNumber(":):("))