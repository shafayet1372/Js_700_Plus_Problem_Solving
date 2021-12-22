/* Given an integer array, you need to find the shortest continuous subarray that if you only sort this subarray in ascending order, 
then the whole array will be sorted in ascending order, too.

Create a function that returns the length of that subarray.

Examples
findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13]) ➞ 5
// You need to sort [3, 2, 5, 8, 7] in ascending order to make
// the whole array sorted in ascending order.

findUnsortedSubarray([10, 7, 5, 3]) ➞ 4

findUnsortedSubarray([2, 4, 4, 4, 4, 3]) ➞ 5
Notes
The given array can contain duplicates, so ascending order here means <= (see example #3).
If the given array is already sorted or is empty, return 0.
 */







function findUnsortedSubarray(nums) {
if(nums.length==0){
  return 0
}else{
  let sortedAr=nums.slice().sort((a,b)=>a-b)
  let i=0

  let result=sortedAr.reduce((acc,val,index)=>{
         if(val!=nums[i++]){
        
          return [...acc,index]
         }
        
         
         return acc
  },[])

  return nums.slice(result[0],result[result.length-1]+1).length
}
}

console.log(findUnsortedSubarray([1, 2, 3, 4, -4, -3, -2, -1]))