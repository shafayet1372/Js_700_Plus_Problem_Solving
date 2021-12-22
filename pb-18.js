/* Given a string, find out if its characters can be rearranged to form a palindrome. */
const string="aabb"
function palindromeRearranging(inputString) {
let  str=inputString.split("")
  
  let count
  let oddcount=0
  let key
  for(let i=0;i<str.length;i++){
    count=1
    for(let j=i+1;j<str.length;j++){
      if(str[i]==str[j]){
       count++
       str.splice(j,1)
       j=j-1
       }
    } 
    if(count%2==1){
      oddcount++
    }
    }
   
  return oddcount>1?false:true
  

}
console.log(palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"))

