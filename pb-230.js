/* replace character in String */

function replaceCharacter(str,replace,character){
let s=str.split("")
for(let i=0;i<s.length;i++){
    if(s[i]==replace){
        s[i]=character
    }
}
return s.join("")
}


console.log(replaceCharacter("My name is shafayet Hossain",'a','o'))