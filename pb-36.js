/* Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

Example

For n = 5, the output should be
digitDegree(n) = 0;
For n = 100, the output should be
digitDegree(n) = 1.
1 + 0 + 0 = 1.
For n = 91, the output should be
digitDegree(n) = 2.
9 + 1 = 10 -> 1 + 0 = 1.
 */

function digitDegree(n) {
let str=n.toString()
let number
let i=0
if(str.length==1){
  return 0
}


while(str.length!=1){
  number=0  
 
    for(let i=0;i<str.length;i++){
       number=number+parseInt(str[i])
    }
    str=number.toString()
   i++
  }
return i

}


console.log(digitDegree(777773))