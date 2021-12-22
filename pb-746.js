/* Truncate String at a Given Length
Create a function that takes a string (the string to truncate) and a number (the maximum length of the truncated string) as arguments and returns 
the truncated string at the given length.

Examples
truncate("Lorem ipsum dolor sit amet.", 11) ➞ "Lorem ipsum"

truncate("Lorem ipsum dolor sit amet.", 16) ➞ "Lorem ipsum"

truncate("Lorem ipsum dolor sit amet.", 17) ➞ "Lorem ipsum dolor"
Notes
To "truncate" means "to shorten by cutting off the top or end".
If a word is truncated in the middle, discard it in the output (see 2nd example above). */

function truncate(string, length) {
  let s=string.split(" ")
	let newStr=string.slice(0,length).split(" ")
  for(let i=0;i<newStr.length;i++){
    if(newStr[i].length!=s[i].length){
      return newStr.slice(0,i).join(" ")
    }
  }
  return newStr.join(" ")
}

console.log(truncate("Lorem ipsum dolor sit amet.", 17))