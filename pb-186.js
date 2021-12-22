/* Create a function which converts an ordered number array into a array of ranges (represented as strings). Note how some arrays have some numbers missing.

Examples
numbersToRanges([1, 2, 3, 4, 5]) ➞ ["1-5"]

numbersToRanges([3, 4, 5, 10, 11, 12]) ➞ ["3-5", "10-12"]

numbersToRanges([1, 2, 3, 4, 99, 100]) ➞ ["1-4", "99-100"]

numbersToRanges([1, 3, 4, 5, 6, 7, 8]) ➞ ["1", "3-8"]
Notes
If there are no numbers consecutive to a number in the array, represent it as only the string version of that number (see example #4).
Return an empty array if the given array is empty */






function numbersToRanges(arr) {
if(arr.length==0){
  return []
}
let result=[]
let group=[]
for(let i=0;i<arr.length;i++){
 if((arr[i]+1)==arr[i+1]){
   group.push(arr[i])
 }else{
   group.push(arr[i])
   result.push(group.length>1?`${group[0]}-${group[group.length-1]}`:`${group[0]}`)
   group=[]
 }
}
return result

}

console.log(numbersToRanges([1, 3, 4, 5, 6, 7, 8]))