/* Remove a part of a given array between given 0-based indexes l and r (inclusive).

Example

For inputArray = [2, 3, 2, 3, 4, 5], l = 2, and r = 4, the output should be */
removeArrayPart(inputArray, l, r) = [2, 3, 5].

function removeArrayPart(inputArray, l, r) {
  let ar=[]
  
    for(let i=0;i<inputArray.length;i++){
      if(!(i>=l) || !(i<=r)){
        ar.push(inputArray[i])
      }
    }
    return ar
}
console.log(removeArrayPart([2,4,10,1],0,2))