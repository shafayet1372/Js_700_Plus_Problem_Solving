/* 
Given an array of numbers, create a function that removes 25% from every number in the array except the smallest number, and adds the total amount 
removed to the smallest number.

Examples
showTheLove([4, 1, 4]) ➞ [3, 3, 3]

showTheLove([16, 10, 8]) ➞ [12, 7.5, 14.5]

showTheLove([2, 100]) ➞ [27, 75]
 */


function showTheLove(arr) {

    let lowNumber=arr.slice().sort((a,b)=>a-b)[0]
    let indexofLow=arr.indexOf(lowNumber)
    let total=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=lowNumber){
            let swap=arr[i]
            arr[i]=arr[i]-((arr[i]/100)*25)
            total=total+(swap-arr[i])
        }
    }
  arr[indexofLow]=arr[indexofLow]+total
  return arr
}


console.log(showTheLove([16, 10, 8]))