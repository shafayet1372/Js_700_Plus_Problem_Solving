/*reverse vowels in given string*/


function reverseVowels(str){
let s=str.split("")
let vowels=['a','e','i','o','u']
let result=[]

for(let i=0;i<s.length;i++){
  if(vowels.indexOf(s[i])>=0){
    result.push(s[i])
  }
}
return result.reverse()

}


console.log(reverseVowels('eqaution'))