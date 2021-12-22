/* Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".

Examples
firstRepeat("legolas") ➞ "l"

firstRepeat("Gandalf") ➞ "a"

firstRepeat("Balrog") ➞ "-1"

firstRepeat("Isildur") ➞ "-1"
// Case sensitive "I" not equal to "i"
Notes
Tests are case sensitive. */





function firstRepeat(chars) {
let str=chars.split("")
for(let i=0;i<str.length;i++){
  let newreg=new RegExp(`${str[i]}`,'g')
  if(chars.match(newreg).length>=2){
    return str[i]
  }
}
return "-1"
}

console.log(firstRepeat("Isildur"))