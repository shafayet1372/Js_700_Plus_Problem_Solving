/* reverse String */

function reverseString(str){
let revStr='',newStr=str.split("")
for(let i=newStr.length-1;i>=0;i--){
    revStr=revStr+newStr[i]
}
return revStr
}


console.log(reverseString("i am"))