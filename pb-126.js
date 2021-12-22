/* Given an array of unknown length, but with an even amount of elements (numbers), copy the half with the highest sum of numbers
 to the other half of the array. If the sum of the first half equals the sum of the second half, return the original array.

Examples
balanced([1, 2, 4, 6, 3, 1]) ➞ [6, 3, 1, 6, 3, 1]

balanced([88, 3, 27, 5, 9, 0, 13, 10]) ➞ [88, 3, 27, 5, 88, 3, 27, 5] */



function balanced(arr) {
let first=arr.slice(0,arr.length/2)
let last=arr.slice(arr.length/2,arr.length)
let sum1=sum2=0
for(let i=0,j=0;i<first.length,j<last.length;i++,j++){
    sum1=sum1+first[i]
    sum2=sum2+last[j]
}
if(sum1==sum2){
    return [...first,...last]
}else if(sum1>sum2){
    return[...first,...first]
}else{
    return[...last,...last]
}
}

console.log(balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]))