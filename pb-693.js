/* Word Riddles
What does the word LFAND represent? It represents the word Finland, because F is in LAND!

Create a function which replicates this to create brand new original word riddles! For the purposes of this challenge, take the string of 
letters before the word "in", and insert it into the 2nd letter position of the word formed after the word "in".

See the examples below for further clarity :)

Examples
makeWordRiddle("Finland") ➞ "LFAND"

makeWordRiddle("dinner") ➞ "NDER"

makeWordRiddle("tkinter") ➞ "TTKER"

makeWordRiddle("STRINGS") ➞ "GSTRS"
Notes
All words given will contain only one occurence of "in" (so no occurences of the words Insulin, Infinity, etc).
There will be no examples of Interest, Pin, or Ping, etc... as there is no clear way to insert the strings into one another.
Return in all CAPS. */

function makeWordRiddle(s) {
  s = s.toLowerCase()
  let index = s.match(/in/).index
  let firstStr = s.slice(0, index)

  let secondStr = s.slice(index + 2, s.length).split("")
  secondStr.splice(1, 0, firstStr)
  return secondStr.join("").toUpperCase()
}

console.log(makeWordRiddle("distinguishable"))