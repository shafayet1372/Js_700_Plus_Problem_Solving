// Write a function which increments a string to create a new string.

// If the string ends with a number, the number should be incremented by 1.
// If the string doesn't end with a number, 1 should be added to the new string.
// If the number has leading zeros, the amount of digits should be considered.
// Examples
// incrementString("foo") ➞ "foo1"

// incrementString("foobar0009") ➞ "foobar0010"

// incrementString("foo099") ➞ "foo100"




function incrementString(str) {
    if(!/[0-9]/.test(str)){
    return str+"1"
  }else{
    str=str.split("")
    let i=str.length-1
    let index
    while(str[i]!='0'){
      if(parseInt(str[i])!='9'){
      
        str[i]=parseInt(str[i])+1
      }else{
         str[i]='0'
      }
      i--
      index=i
    }
   if(str[i]=='0' && str[i+1]=='0'){
     str[i]='1'
     
   }
   return   str.join("")
  }
}

console.log(incrementString("foobar00599"))