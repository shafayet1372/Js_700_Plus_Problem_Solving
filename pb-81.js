/* 
Given a positive integer number and a certain length, we need to modify the given number to have a specified length.
We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.

Example

For number = 1234 and width = 2, the output should be
integerToStringOfFixedWidth(number, width) = "34";
For number = 1234 and width = 4, the output should be
integerToStringOfFixedWidth(number, width) = "1234";
For number = 1234 and width = 5, the output should be
integerToStringOfFixedWidth(number, width) = "01234".
 */
function integerToStringOfFixedWidth(number, width) {
let toAr=number.toString().split("")
let ar1=[]
if(width>toAr.length){
    let len=width-toAr.length
    for(let i=0;i<len;i++){
        toAr.unshift("0")
    }
   return toAr.join("")
}else if(width<toAr.length){
    let m=toAr.length-1
    for(let i=0;i<width;i++){
        ar1.push(toAr[m])
        m--
    }
   
    return ar1.sort((a,b)=>a-b).join("")
}

return number.toString()


}
