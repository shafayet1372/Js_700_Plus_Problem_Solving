/* Determine If Two Numbers Add up to a Target Value
Given two unique integer arrays a and b, and an integer target value v, create a function to determine whether there is a pair of numbers
 that add up to the target value v, where one number comes from one array a and the other comes from the second array b.

Return true if there is a pair that adds up to the target value and false otherwise.

Examples
sumOfTwo([1, 2], [4, 5, 6], 5) ➞ true

sumOfTwo([1, 2], [4, 5, 6], 8) ➞ true

sumOfTwo([1, 2], [4, 5, 6], 3) ➞ false

sumOfTwo([1, 2], [4, 5, 6], 9) ➞ false
Notes
N/A
 */

function sumOfTwo(a, b, v) {

/*
shortway
   return a.some(x=>{
    for(let i=0;i<b.length;i++){
      if(x+b[i]==v){
        console.log(x+b[i])
        return true
      }
    }
  }) */
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] + b[j]==v) {
        return true
      }
    }
  }
  return false
}

console.log(sumOfTwo([1,2,3], [10,20,30,40,50], 44))