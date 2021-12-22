/* 
H4ck3r Sp34k
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

Examples
hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"

hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"

hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
Notes
In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5. */




function hackerSpeak(str) {
  const code = {
    a: 4, e: 3, i: 1, o: 0, s: 5
  }

 /*  
 //shortway

 let s=str.split("")
  return s.map(val=>{
    if(code[val] || code[val]==0){
      return code[val]
    }
    return  val
  }).join("") */
  let s = str.split("")
  for (let i = 0; i < s.length; i++) {
    if (code[s[i]] || code[s[i]] == 0) {
      s[i] = code[s[i]]
    }
  }
  return s.join("")
}

console.log(hackerSpeak("javascript is cool"))