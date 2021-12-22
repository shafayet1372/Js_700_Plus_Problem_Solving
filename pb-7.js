/* Given an array of integers, find the pair of adjacent elements that has the largest product and return that product. */

function adjacentElementsProduct(inputArray) {
let big=-10000
for(let i=0;i<inputArray.length-1;i++){
 
  if((inputArray[i]*inputArray[i+1])>big){
    big=inputArray[i]*inputArray[i+1]
    console.log(2)
  }

}
return big
}



console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))