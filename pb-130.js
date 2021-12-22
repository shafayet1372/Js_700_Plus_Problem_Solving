/* 
Create a left rotation and a right rotation function that returns all the left rotations and right rotations of a string.

Examples
leftRotations("abc") ➞ ["abc", "bca", "cab"]

rightRotations("abc") ➞ ["abc", "cab", "bca"]

leftRotations("abcdef") 
➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]

rightRotations("abcdef") 
➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]

 */


function leftRotations(str) {
let result=[]
result[0]=str
str=str.split("")
let i=1,newstr
while(i<str.length){
 let j=i
 newstr=""
 while(newstr.length!=str.length){
    newstr=newstr+str[j]
    
    if((str.length-j)==1){
        j=-1
    }
    j++
 }
 result.push(newstr)
 i++
}	
return result
}
console.log(leftRotations('abcdef'))





function rightRotations(str) {
let result=[]
result[0]=str
str=str.split("")
let i=str.length-1,newstr
while(i>0){
 let j=i
 newstr=""
 while(newstr.length!=str.length){
    newstr=newstr+str[j]
    
    if((str.length-j)==1){
        j=-1
    }
    j++
 }
 result.push(newstr)
 i--
}	
return result
}

console.log(rightRotations("abcdef"))