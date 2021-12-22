/* 
To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.

Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.

Examples
countNumberOfOccurrences({
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot"
}) ➞ { moron: 2, scumbag: 1, idiot: 2 }


countNumberOfOccurrences({
  a: "moron",
  b: "moron",
  c:"moron"
}) ➞ { moron: 3 }


countNumberOfOccurrences({
  a: "idiot",
  b: "scumbag"
}) ➞ { idiot: 1, scumbag: 1 }

 */
const obj = { a: "moron", b: "scumbag", c: "moron", d: "idiot", e: "idiot" }
const obj2 = { a: "pig", b: "pig", c: "pig" }
const obj3 = { a: "sleazball", b: "pervert", c: "pervert", d: "pervert" }


function countNumberOfOccurrences(obj) {
	const count={}
  for(let v in obj){
    if(count[obj[v]]){
      count[obj[v]]++
    }else{
      count[obj[v]]=1
    }
  }
  return count
}

console.log(countNumberOfOccurrences(obj3))