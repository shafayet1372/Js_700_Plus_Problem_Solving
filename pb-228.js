/* print first character of every word */


function printFirstCharacter(str){
let s=str.split("")
let result=[]
for(let i=0;i<s.length;i++){
    if(s[i]!=' '){
        
        if(i==0){
            result.push(s[i])
        }
        if(s[i-1]==' '){
            result.push(s[i])
        }
    }
}
return result.join("")
}

console.log(printFirstCharacter(" Hello  User! Welcome"))