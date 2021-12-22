/* Given an array of integers, find the maximal absolute difference between
 any two of its adjacent elements */
function arrayMaximalAdjacentDifference(inputArray) {
let big=-10000
let dif
for(let i=0;i<inputArray.length-1;i++){
  dif=inputArray[i]-inputArray[i+1]
  if(dif<0){
    dif=dif*(-1)
  }
  if(dif>big){
    big=dif
  }

}
return big
}
console.log(arrayMaximalAdjacentDifference([-1, 4, 10, 3, -2]))