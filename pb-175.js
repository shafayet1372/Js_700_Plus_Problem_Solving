// Given an array of strings and an original string, write a function to output an array of boolean values - true if the word can be formed 
//from the original word by swapping two letters only once and false otherwise.

// Examples
// validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")
// ➞ [true, true, false, false]

// // Swap "A" and "B" from "ABCDE" to get "BACDE".
// // Swap "A" and "E" from "ABCDE" to get "EBCDA".
// // Both "BCDEA" and "ACBED" cannot be formed from "ABCDE" using only a single swap.

// validateSwaps(["32145", "12354", "15342", "12543"], "12345")
// ➞ [true, true, true, true]

// validateSwaps(["9786", "9788", "97865", "7689"], "9768")
// ➞ [true, false, false, false]









function validateSwaps(arr, str) {
  let result=[]
  for(let i=0;i<arr.length;i++){
   let val=arr[i].split("")
   let match=false, found=false
   for(let j=0;j<val.length;j++){
     for(let m=j+1;m<val.length;m++){
       let swap=val[j]
       val[j]=val[m]
       val[m]=swap
       if(val.join("")==str){
         match=true
         found=true
         break;
       }else{
         val=arr[i].split("")
       }
     }
     if(found){
       break;
              }
      }
     if(match){
       result.push(true)
     }else{
       result.push(false)
     }
     
  }
  return result
}

console.log(validateSwaps(["9786", "9788", "97865", "7689"], "9768"))