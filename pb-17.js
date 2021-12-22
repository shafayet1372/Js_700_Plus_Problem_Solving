/* You are given an array of integers. On each move you are allowed to increase exactly one of its element by one.
 Find the minimal number of moves required to obtain a strictly increasing sequence from the input */
const inputArray= [2, 1, 10, 1]

function arrayChange(inputArray) {
let m=0;
let counter=0
let value;
while(m<inputArray.length-1){
 
  if(inputArray[m]>=inputArray[m+1]){
   console.log(2)
    while(inputArray[m+1]<=inputArray[m]){
      inputArray[m+1]=inputArray[m+1]+1
    counter++
    }
  }
  

  m++
}
return counter
}


console.log(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]))