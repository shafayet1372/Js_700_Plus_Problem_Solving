// Given an array of numbers and a value for n, split the numbers into n-sized groups. If we imagine that these groups are stacked on top of each other 
//(see below), return the column number that has the greatest sum. If two or more columns have the same sum, return the one with the smallest column number.


// Example
// nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
// n = 4
// Gives the array:

// [[4, 14, 12,  7],
// [14, 16, 5, 13],
// [7, 16, 11, 19]]

// // 1, 2, 3, 4 (column)
// // 25, 46, 28, 39 (sum)
// You would return 2, as the 2nd column has the greatest sum.

// Notes












function colWithMaxSum(nums, n) {
  let boxOfNums=[]
  let counter,num=-1000
  
  for(let i=0;i<n;i++){
     let sum=0
    for(let j=i;j<nums.length;j=j+n){
      sum=sum+nums[j]
    }

    if(sum>num){
      num=sum
      counter=i+1
    }
    
  }
  return counter
}

console.log(colWithMaxSum([4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19],4))