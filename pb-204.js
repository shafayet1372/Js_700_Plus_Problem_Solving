/* A long stretch of beach is represented by a string of two characters 0 - free, 1 - occupied. Due to recent restrictions, a new person cannot
 take place next to another. There has to be one free place between two people lounging on the beach. Create a function to compute how many new 
people at most can settle in on the given beach.

Examples
sunLoungers("10001") ➞ 1
// Can take place in the middle.

sunLoungers("00101") ➞ 1
// Can take place on the left.

sunLoungers("0") ➞ 1
// Can take one place.

sunLoungers("000") ➞ 2
// Can take places on the left and on the right
 */







function sunLoungers(beach) {
  let s=beach.split("")
  let counter=0

  if(s.length==1){
    return 1
  }
  for(let i=0;i<s.length;i++){
    if(i==0 && s[i]=='0'){
      if(s[i+1]=='0'){
        counter++
      }
      console.log(i)
    }else if(s[i]=='0' && i!=s.length-1){
       if(s[i-1]=='0' && s[i+1]=='0'){
        counter++
        
        i++
      }
     
    }else{
      
       if(s[i]=='0' && i==s.length-1){
         counter++
         }
    }

 }
  return counter
}


console.log(sunLoungers("010000100000000010010000001010000000010100001000000010010000000001000000001000000010000000100100000000100000100100010000001"))