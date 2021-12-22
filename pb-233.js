/* how many unique character in a  String */

function uniqueCharacters(str){
let unique=[],s=str.split("")
for(let i=0;i<s.length;i++){
    if(unique.indexOf(s[i])==-1){
        unique.push(s[i])
    }
}
return unique.length
}

console.log(uniqueCharacters("bccbababd"))
