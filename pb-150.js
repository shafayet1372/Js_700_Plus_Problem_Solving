/* Create a function that builds a staircase given the height and the type of building block.

Examples
buildStaircase(3, "#") ➞ [
  ["#", "_", "_"],
  ["#", "#", "_"],
  ["#", "#", "#"]
]

buildStaircase(4, "#") ➞ [
  ["#", "_", "_", "_"],
  ["#", "#", "_", "_"],
  ["#", "#", "#", "_"],
  ["#", "#", "#", "#"]
]

buildStaircase(3, "A") ➞ [
  ["A", "_", "_"],
  ["A", "A", "_"],
  ["A", "A", "A"]
]

height = 3 and building block = "A"

buildStaircase(4, "$") ➞ [
  ["$", "_", "_", "_"],
  ["$", "$", "_", "_"],
  ["$", "$", "$", "_"],
  ["$", "$", "$", "$"]
]

height = 4 and building block = "$"

 */

function buildStaircase(height, block) {

	let m=1,l=height
  let result=[]
  for(let i=1;i<=height;i++){
    let box=[]
    for(let j=1;j<=height;j++){
      box.push(block)
    }
    for(let k=1;k<m;k++){
      box.push("_")
    }
    result.push(box)
    height--
    m++
  }
  return result.reverse()
}

console.log(buildStaircase(0,"#"))