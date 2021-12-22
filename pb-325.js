/* Capitalize by ASCII
Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.

Examples
asciiCapitalize("to be or not to be!") ➞ "To Be oR NoT To Be!"

asciiCapitalize("THE LITTLE MERMAID") ➞ "THe LiTTLe meRmaiD"

asciiCapitalize("Oh what a beautiful morning.") ➞ "oH wHaT a BeauTiFuL moRNiNg."
Notes
N/A */





function asciiCapitalize(str) {
let s=str.split("")
return s.map((val,i)=>{
  let asci=str.charCodeAt(i)
  if(asci%2==0 && val!=' '){
    return val.toUpperCase()
  }else if(asci%2==1 && val!=' '){
    return val.toLowerCase()
  }
  return val
}).join("")
}

console.log(asciiCapitalize("to be or not to be!"))