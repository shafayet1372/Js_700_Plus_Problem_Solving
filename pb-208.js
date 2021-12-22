/* Create a function that takes an arr and returns the sum of the numbers between two "1"s.

Examples
spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]) ➞ 14

spaceApart(["1", 9, 20, 38, "1"]) ➞ 67

spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]) ➞ "invalid"
Notes
Return "invalid" if:
A negative number exists inside arr.
The number of "1"s does not equal 2.
Ignore any other string inside arr.
Note that "1" is not 1. */




function spaceApart(arr) {
if(arr.length==1){
  return "invalid"
}
let sum=0
let start=arr.indexOf("1")
for(let i=start+1;i<arr.length;i++){
  if(arr[i]<0){
    return "invalid"
  }
  if(arr[i]!=='1' && (typeof arr[i]=='number')){
    sum=sum+arr[i]
  }
  
}
return sum
}

console.log(spaceApart(["2", "a", 1, "1", 1, 3, 49, "1"]))