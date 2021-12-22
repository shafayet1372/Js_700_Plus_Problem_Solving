/* Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

Define a string reflection as the result of applying the alphabet reflection to each of its characters.

Reflect the given string.

Example

For inputString = "name", the output should be
reflectString(inputString) = "mznv". */

function reflectString(inputString) {
let newstr=""
let ref1
for(let i=0;i<inputString.length;i++){
  ref1=inputString.charCodeAt(i)-97
  newstr=newstr+String.fromCharCode(122-ref1)
}
return newstr
}


console.log(reflectString('codesignal'))