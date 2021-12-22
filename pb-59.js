/* 
A little child is studying arithmetic. They have just learned how to add two integers, written one below another, column by column. But the child always forgets about the important part - carrying.

Given two integers, your task is to find the result that the child will get.

Note: The child had learned from this site, so feel free to check it out too if you are not familiar with column addition.

Example

For param1 = 456 and param2 = 1734, the output should be
additionWithoutCarrying(param1, param2) = 1180. */

function additionWithoutCarrying(param1, param2) {
    let arr=[],small,big;
    param1=param1.toString().split("")
    param2=param2.toString().split("")
  
    let re=param2.length>=param1.length?param2.length:param1.length
  
   if(param1.length!=param2.length){
     small=param2.length<param1.length?param2:param1
     big= param2.length>param1.length?param2:param1
    let len=re-small.length
    for(let j=1;j<=len;j++){
        small.unshift("0") 
       }
       
   }
 
  
    for(let i=0;i<re;i++){
     result=(parseInt(param2[i])+parseInt(param1[i])).toString().split("")
     arr.push(result[result.length-1])
    }
 
     return parseInt(arr.join(""))

    }
   
    console.log(additionWithoutCarrying(9999,9999))