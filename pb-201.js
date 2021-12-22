/* Create a function that takes an array arr and a number n and returns an array of two integers from arr whose product is that of the number n 
of the following form:

[value_at_lower_index, value_at_higher_index]
Make sure that you return an array of two integers that exactly divides n (product of n) and that the indices coincide the above format. The sorting 
of the values therefore is based on the indices ascendingly.

Examples
twoProduct([1, 2, 3, 9, 4, 5, 15, 3], 45) ➞ [9, 5]
// at index 5 which has the value 5 is  a full match
// to the value at index 3 which is 9
// the closest gap between indices that equates
// to the product which is 45

twoProduct([1, 2, 3, 9, 4, 15, 3, 5], 45) ➞ [3, 15]
// at index 5 which has the value 15 is a full match
// to the value at index 2 which is 3
// the closest gap between indices that equates
// to the product which is 45

twoProduct([1,  2, -1,  4,  5,  6,  10, 7], 20) ➞ [4, 5]
// at index 4 which has the value 5 is a full match
// to the value at index 3 which is 4
// a full match can only be achieved  if you've found the multiplier at an
// index lower than the current index, thus, 5 (@ index 4) has a pair lower
// than its index which is the value 4 (@ index 3), so, 5*4 = 20, in which 5
// has a higher index (4) than 4 which has an index value of 3

twoProduct([1, 2, 3, 4, 5,  6, 7, 8, 9, 10], 10) ➞ [2, 5]

twoProduct([100, 12, 4, 1, 2], 15) ➞ undefined
 */







function twoProduct(arr, n) {
 
   for(let i=0;i<arr.length;i++){
    
    for(let j=0;j<arr.length;j++){
      if(i>j){
        
        if(n%arr[i]==0 && n%arr[j]==0){
           if(arr[i]*arr[j]==n){

           return [arr[j],arr[i]]
        
            }
           }
           

        }
     
       
      }
     
    }

  }
  


console.log(twoProduct([1, 2, 3, 4, 5,  6, 7, 8, 9, 10], 10))