/* 
In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.

Examples
returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]

returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]

returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]
 */


function returnUnique(arr) {
	let result=[]
    let counter
    for(let i=0;i<arr.length;i++){
        counter=0
        for(let j=0;j<arr.length;j++){
            
         if(arr[i]==arr[j]){
             counter++
         }
        }
       
        if(counter==1){
            result.push(arr[i])
        }
    }
    return result
}
console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]))