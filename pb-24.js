/* Given a string, your task is to replace each of its characters by the next one
 in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
 */

const string="crazy"
function alphabeticShift(inputString) {
let newstr=""
let num
for(let i=0;i<inputString.length;i++){
 num=inputString.charCodeAt(i)
  if(num==122){
    num=String.fromCharCode(97)
  }else{
    num=String.fromCharCode(inputString.charCodeAt(i)+1)
  }

  newstr=newstr+num
}
return newstr
}


console.log(alphabeticShift(string))