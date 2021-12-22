/* trim the string */

function teamString(str){
let s=str.split("")
let i=0
while(i ==' '){
    
    if(s[i]==' '){
        s.splice(i,1)
        i--
    }
    i++
}
let j=s.length-1

while(s[j]==' '){
    if(s[j]==' '){
        s.splice(j,1)
        
    }
   
    j--
}
return s.join('')
}


console.log(teamString("  hello user welcome  "))