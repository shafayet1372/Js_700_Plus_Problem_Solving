/* Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be
largestNumber(n) = 99. */

function largestNumber(n) {
    let num=n
    let str=""
    for(let i=0;i<n;i++){
        str=str+"9"
    }
    return parseInt(str)
    }
    
console.log(largestNumber(2))