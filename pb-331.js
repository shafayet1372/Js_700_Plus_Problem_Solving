/* Join Two Portions of a Path
Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one 
separator and if it is not present it should be added.

Examples
joinPath("portion1", "portion2") ➞ "portion1/portion2"

joinPath("portion1/", "portion2") ➞ "portion1/portion2"

joinPath("portion1", "/portion2") ➞ "portion1/portion2"

joinPath("portion1/", "/portion2") ➞ "portion1/portion2"
Notes
Try not to solve this challenge using only if-else conditio */

function joinPath(portion1, portion2) {
	let s1=portion1.split("/")
  let s2=portion2.split('/')
  return s1.join("")+"/"+s2.join("")
}

console.log(joinPath("portion1", "portion2"))