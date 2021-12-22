/* You are given two arrays. The elements in arr1 threw a party and started to mix around. However, one of the elements got lost! 
Your task is to return the element which was lost.

Examples
missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]) ➞ 2

missing([true, true, false, false, true], [false, true, false, true]) ➞ true

missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]) ➞ "ugly"
Notes
Assume that the first array always contains 1 or more elements.
Elements are always lost.
An element can also have duplicates */


function missing(arr1, arr2) {
	let found
  let arrcmp=[...arr2]
  for(let i=0;i<arr1.length;i++){
    found=false
    for(let j=0;j<arrcmp.length;j++){
      if(arr1[i]==arrcmp[j]){
        found=true
        arrcmp.splice(j,1)
        break;
      }
    }
    if(!found){
      return arr1[i]
    }
  }
  
}

console.log(missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]))