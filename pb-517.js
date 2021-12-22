/* Evaluating Factorials
Create a function that takes an array of factorial expressions and returns their sum.

Examples
evalFactorial(["2!", "3!"]) ➞ 8

evalFactorial(["5!", "4!", "2!"]) ➞ 146

evalFactorial(["0!", "1!"]) ➞ 2
Notes
0! and 1! both equal 1. */

function evalFactorial(arr) {
  /*shortway
   return arr.map(val=>{
     let nums=parseInt(val.split('!')[0])
     let p=1
     if(nums!=1 && nums!=0){
       for(let i=1;i<=nums;i++){
         p*=i
       }
     }else{
           p*=1
     }
     return p
   }).reduce((acc,val)=>{return acc+val},0) */
  let sum = 0, product
  for (let i = 0; i < arr.length; i++) {
    let num = parseInt(arr[i].split("!")[0])
    product = 1
    if (num != 0 && num != 1) {

      for (let j = 1; j <= num; j++) {
        product *= j
      }
    } else {
      product *= 1
    }
    sum += product
  }
  return sum
}

console.log(evalFactorial(["0!", "1!"]))