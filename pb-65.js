/* Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, 
so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

Given an array arr, swap its first and last elements and return the resulting array.

Example

For arr = [1, 2, 3, 4, 5], the output should be
firstReverseTry(arr) = [5, 2, 3, 4, 1] */

function firstReverseTry(arr) {
if(arr.length>0){
    let first=arr[0]
arr[0]=arr[arr.length-1]
arr[arr.length-1]=first
}
    
return arr
}
console.log(firstReverseTry([1,2,3,4,5]))