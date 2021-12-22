/* Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
Given a ticket number n, determine if it's lucky or not. */
const number=1230
function isLucky(n) {
  let sum1=0
  let sum2=0
let numberSplit=n.toString().split("")
for(let i=0;i<numberSplit.length/2;i++){
  sum1=sum1+parseInt(numberSplit[i])
}
for(let j=numberSplit.length/2;j<numberSplit.length;j++){
  sum2=sum2+parseInt(numberSplit[j])
}
return sum1==sum2
}


console.log(isLucky(number))