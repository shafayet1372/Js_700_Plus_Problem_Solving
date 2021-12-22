/* Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

Example

For n = 9, the output should be
isSumOfConsecutive2(n) = 2.

There are two ways to represent n = 9: 2 + 3 + 4 = 9 and 4 + 5 = 9.

For n = 8, the output should be
isSumOfConsecutive2(n) = 0.

There are no ways to represent n = 8. */


function isSumOfConsecutive2(n) {
let counter=0
let sum
for(let i=1;i<n;i++){
    sum=i
    for(let j=i+1;j<n;j++){
        sum=sum+j
        console.log(sum)
        if(sum==n){
            counter++
            break;
        }
    }
}
return counter
}

console.log(isSumOfConsecutive2(9))