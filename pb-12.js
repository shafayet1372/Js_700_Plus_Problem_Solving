/* Given two strings, find the number of common characters between them. */
const s1='abca'
const s2='xyzbac'
function commonCharacterCount(s1, s2) {
let counter=0;
s1=s1.split("")
s2=s2.split("")
for(let i=0;i<s1.length;i++){
  for(let j=0;j<s2.length;j++){
    if(s1[i]==s2[j]){
      s2.splice(j,1)
      counter++
      break;
    }
  }
}
return counter
}


console.log(commonCharacterCount(s1,s2))