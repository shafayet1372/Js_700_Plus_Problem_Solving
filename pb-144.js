/* Given a number, create a function which returns a new number based on the following rules:

For each digit, replace it by the number of times it appears in the number.
The final instance of the number will be an integer, not a string.
The following is a working example:

digitCount(136116) ➞ 312332
The number 1 appears thrice, so replace all 1s with 3s.
The number 3 appears only once, so replace all 3s with 1s.
The number 6 appears twice, so replace all 6s with 2s.
Examples
digitCount(221333) ➞ 221333

digitCount(136116) ➞ 312332
 */


function digitCount(num) {
  let counter
  let cmp=[]
  let indexs=[]
  let result=[]
  num=num.toString().split("")
  for(let i=0;i<num.length;i++){
    counter=0
    if(cmp.indexOf(num[i])==-1){
      for(let j=i;j<num.length;j++){
        if(num[i]==num[j]){
          counter++
          indexs.push(j)
        }
      }
     for(let m=0;m<indexs.length;m++){
          result[indexs[m]]=counter
      }
      cmp.push(num[i])
      indexs=[]
    }
  }
  return parseInt(result.join(""))
}

console.log(digitCount(136116))



