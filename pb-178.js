// Create a function that converts a string into a matrix of characters that can be read vertically. Add spaces when characters are missing.

// Examples
// verticalText("Holy bananas") ➞ [
//   ["H", "b"],
//   ["o", "a"],
//   ["l", "n"],
//   ["y", "a"],
//   [" ", "n"],
//   [" ", "a"],
//   [" ", "s"]
// ]

// verticalText("Hello fellas") ➞ [
//   ["H", "f"],
//   ["e", "e"],
//   ["l", "l"],
//   ["l", "l"],
//   ["o", "a"],
//   [" ", "s"]
//]





function verticalText(str) {
	let result=[]
  let col=str.split(" ").length
  let row=str.split(" ").slice().sort((a,b)=>b.length-a.length)[0].length
  str=str.split(" ")
  for(let i=0;i<row;i++){
    result.push([])
  }
  for(let m=0;m<str.length;m++){
    for(k=0;k<row;k++){
      result[k][m]=str[m][k]
      if(result[k][m]==undefined){
        result[k][m]=" "
      }
    }
  }
 return result
}

console.log(verticalText("I hope you have a great day"))