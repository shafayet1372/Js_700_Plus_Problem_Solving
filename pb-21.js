/* An IP address is a numerical label assigned to each device (e.g., computer, printer)
 participating in a computer network that uses the Internet Protocol for communication. 
 There are two versions of the Internet protocol, and thus two versions of addresses. 
 One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules. */


function isIPv4Address(inputString) {
let str=inputString
str=str.split(".")

let counter=0
let leadZero
for(let i=0;i<str.length;i++){
  leadZero=parseInt(str[i]).toString()
  
  if(leadZero!=str[i]){
  
    return false
  }else if(parseInt(str[i])<0 || parseInt(str[i])>255){
  return false
   
  }else if(str[i]==""){
 
    return false
  }else{
   counter++
  }
  
}
return counter==4?true:false
}

console.log(isIPv4Address("1"))