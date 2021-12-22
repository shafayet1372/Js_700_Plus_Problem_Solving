/* Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101. */

function deleteDigit(n) {
let numarr
let num=-1000

let s=n.toString().split("")

for(let i=0;i<s.length;i++){
numarr=s.slice()
for(let j=i;j<numarr.length;j++){
  numarr.splice(j,1)
  
  if(parseInt(numarr.join(""))>num){
      num=parseInt(numarr.join(""))
    
  }
  j=j-1

}

}
return num

}


console.log(deleteDigit('152'))