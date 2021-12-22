/* Given an array of distinct integers, create a function that checks if the array is sorted and rotated clockwise. If so, return "YES"; otherwise return "NO".

Examples
check([3, 4, 5, 1, 2]) ➞ "YES"
// The above array is sorted and rotated.
// Sorted array: [1, 2, 3, 4, 5].
// Rotating this sorted array clockwise
// by 3 positions, we get: [3, 4, 5, 1, 2].

check([1, 2, 3]) ➞ "NO"
// The above array is sorted but not rotated.

check([7, 9, 11, 12, 5]) ➞ "YES"
// The above array is sorted and rotated.
// Sorted array: [5, 7, 9, 11, 12].
// Rotating this sorted array clockwise
// by 4 positions, we get: [7, 9, 11, 12, 5].
Notes
N/A */





function check(arr) {
 let sortedAr=arr.slice().sort((a,b)=>a-b)
 if(arr.join("")==sortedAr.join("")){
   return "NO"
 }
 let i=0
 while(i<arr.length){
   let v=sortedAr.shift()
   sortedAr.push(v)
   if(sortedAr.join("")==arr.join("")){
     return "YES"
   }
   i++
 }
 return "NO"
}

console.log(check([5, 3, 4, 1]))