/* Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.
Example

For s = "aabbbc", the output should be
lineEncoding(s) = "2a3bc". */

function lineEncoding(s) {
 
    let i=0;
    let m,str,newstr="";
    let arr=[]
  
    while(i<s.length){
     str=s[i]
     m=i+1
     while(s[m]==s[i]){
         str=str+s[m]
         m++
         
     }
    
    if(str.length>1){
          arr.push(str.length+str[0])
           i=m
        }else{
      
        arr.push(str)
        i++
    }
    
    }
  
  return arr.join("")
}


console.log(lineEncoding("wwwwwwwawwwwwww"))