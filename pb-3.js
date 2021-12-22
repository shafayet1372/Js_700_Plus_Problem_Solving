/* Given a rectangular matrix of characters, add a border of asterisks(*) to it. */
const stringarr=["abc",
"ded"]

function addBorder(picture) {

  let newstrgroup=[]
  let str
  let splits

  for(let i=0;i<picture.length;i++){
    str=""
    splits=picture[i].split("")
    splits.push("*")
    splits.unshift("*")
    splits=splits.join("")
    newstrgroup.push(splits) 
  }
  for(let j=0;j<newstrgroup[0].length;j++){
    str=str+"*"
  }
  newstrgroup.push(str)
  newstrgroup.unshift(str)
  return newstrgroup
}
console.log(addBorder(stringarr)  )
