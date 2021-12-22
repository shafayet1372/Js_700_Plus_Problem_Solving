/* Find the leftmost digit that occurs in a given string.

Example

For inputString = "var_1__Int", the output should be
firstDigit(inputString) = '1';
For inputString = "q2q-q", the output should be
firstDigit(inputString) = '2';
For inputString = "0ss", the output should be
firstDigit(inputString) = '0'. */


function firstDigit(inputString) {
  let digit=[0,1,2,4,5,6,7,8,9]
  for(let i=0;i<inputString.length;i++){
     
   if(digit.includes(parseInt(inputString[i]))){
     return inputString[i]
   }
  }
}


console.log(firstDigit("0ss"))