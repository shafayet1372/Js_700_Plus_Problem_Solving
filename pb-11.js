/* Given an array of strings, return another array containing all of its longest strings. */
const inputArray= ["a", 
"abc", 
"cbd", 
"zzzzzz", 
"a", 
"abcdef", 
"asasa", 
"aaaaaa"]
function allLongestStrings(inputArray) {
let newar=inputArray.map(val=>val.length).sort((a,b)=>a-b)
let longestNumber=newar[newar.length-1]
return inputArray.filter(val=>val.length==longestNumber)

}

console.log(allLongestStrings(inputArray))