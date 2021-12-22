/* Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.

Examples
canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true

canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true

canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Duplicate 7s not found in target array.

canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false
// Missing 6 from target array.
Notes
Arrays do not have to be sorted (see example #2).
Arrays should concatenate to create the final array exactly (see examples #3 and #4)
 */


function canConcatenate(arr, target) {
    
    let myArr=arr.reduce((acc,val)=>{
   return [...acc,...val]
    },[])
    target=target.sort((a,b)=>a-b)
    myArr=myArr.sort((a,b)=>a-b)
    
    return target.join("").toString()==myArr.join("").toString()
    
}

console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]))