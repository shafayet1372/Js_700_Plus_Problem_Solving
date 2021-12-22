/* Determine whether the given string can be obtained by one concatenation of some string to itself.

Example

For inputString = "tandemtandem", the output should be
isTandemRepeat(inputString) = true;
For inputString = "qqq", the output should be
isTandemRepeat(inputString) = false;
For inputString = "2w2ww", the output should be
isTandemRepeat(inputString) = false. */


function isTandemRepeat(inputString) {
let first=inputString.split("")[0]
let counter=1

for(let i=1;i<inputString.length;i++){
  if(inputString[i]!=first){
   counter++
  
  }else{
    break;
  }
}
let concatsStr=inputString.split("").slice(0,counter).join("")
let str=inputString.split("")
let ar=[]

for(let i=0;i<str.length;i=i+counter){
  let st=str.slice(i,i+counter).join("")
 
  if(st==concatsStr){
    ar.push(true)
  }else{
    ar.push(false)
  }
 
}


return ar.every(val=>val==true) && ar.length%2==0?true:false
}



console.log(isTandemRepeat("00100"))