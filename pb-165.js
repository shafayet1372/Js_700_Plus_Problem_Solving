// A happy number is a number which yields a 1 by repeatedly summing up the square of its digits. If such a process results in an endless 
cycle of numbers containing 4, the number is said to be an unhappy number.

// Create a function that accepts a number and determines whether the number is a happy number or not. Return true if so, false otherwise.

// Examples
// isHappy(67) ➞ false

// isHappy(89) ➞ false

// isHappy(139) ➞ true

// isHappy(1327) ➞ false

// isHappy(2871) ➞ false

// isHappy(3970) ➞ true
// Notes
// Hint: Your loop terminates if the value of n is either 1 or 4.
// Optionally, you can solve this challenge via a recursive approach.
// A recursive version of this challenge can be found here.








function isHappy(n) {
  let digits=n.toString().split("")
  let sum=null
  let result=null
  while(true){
       sum=0
       let i=0
       while(i<digits.length){
         sum=sum+Math.pow(parseInt(digits[i]),2)
         
         i++
       }
       digits=sum.toString().split("")
      
       if(sum==1 || sum==4){
         break;
       }
  }
  return sum==1?true:false
}


console.log(isHappy(139))