/* Write a JavaScript function to clone an array. */

function array_Clone(arr){
let result=[]

for(let i=0;i<arr.length;i++){
  result.push(arr[i])
}
return result

}

console.log(array_Clone([1,2,[4,0]]))