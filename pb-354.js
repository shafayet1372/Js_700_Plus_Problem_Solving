/* Numbers to Arrays and Vice Versa
Write two functions:

toArray(), which converts a number to an array of its digits.
toNumber(), which converts an array of digits back to its number.
Examples
toArray(235) ➞ [2, 3, 5]

toArray(0) ➞ [0]

toNumber([2, 3, 5]) ➞ 235

toNumber([0]) ➞ 0
Notes
All test cases will be weakly positive numbers: >= 0
 */









function toArray(num) {
let s=num.toString().split('')
let result=[]
for(let i=0;i<s.length;i++){
  result.push(parseInt(s[i]))
}	
return result
/* shortway
return s.map(val=>parseInt(val)) */
}
console.log(toArray(235))


function toNumber(arr) {
let s=""
for(let i=0;i<arr.length;i++){
  s+=arr[i]
}
return parseInt(s)
/* shortway
return parseInt(arr.join("")) */
}

console.log(toNumber([2,3,5]))