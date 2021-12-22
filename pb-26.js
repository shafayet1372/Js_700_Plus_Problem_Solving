/* Consider integer numbers from 0 to n - 1 written down along the circle in such a way that 
the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber */

function circleOfNumbers(n, firstNumber) {
 let arr=[]
 let index
 for(let i=0;i<n;i++){
   arr.push(i)
 }
 let firstAr=arr.slice(0,arr.length/2)
 let lastAr=arr.slice(arr.length/2,arr.length)
 if(firstNumber>=lastAr[0]){
  index=lastAr.indexOf(firstNumber)
  return firstAr[index]
 }
 index=firstAr.indexOf(firstNumber)
  return lastAr[index]
}
console.log(circleOfNumbers(6,3))