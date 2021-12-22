/* Create a function that returns the characters from an array or string r on odd or even positions, depending on the specifier s. 
The specifier will be "odd" for items on odd positions (1, 3, 5, ...) and "even" for items on even positions (2, 4, 6, ...).

Examples
charAtPos([2, 4, 6, 8, 10], "even") ➞ [4, 8]
4 & 8 occupy the 2nd & 4th positions

charAtPos("EDABIT", "odd") ➞ "EAI"
"E", "A" and "I" occupy the 1st, 3rd and 5th positions

charAtPos(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "odd") ➞ ["A", "B", "T", "A", "I", "Y"]
 */


function charAtPos(r, s) {
  let specifier={
    odd:1,
    even:0
  }
  if(typeof r=='string'){
   r=r.split("")
   return r.filter((val,i)=>(i+1)%2==specifier[s]).join("")
  }else{
    return r.filter((val,i)=>(i+1)%2==specifier[s])
  }
}

console.log(charAtPos("EDABIT", "odd"))