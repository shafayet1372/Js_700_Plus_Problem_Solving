/* Create a function that takes an array of numbers and returns the sum of all prime numbers in the array.

Examples
sumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 17

sumPrimes([2, 3, 4, 11, 20, 50, 71]) ➞ 87

sumPrimes([]) ➞ 0
Notes
Given numbers won't exceed 101.
A prime number is a number which has exactly two divisors (1 and itself
 */

function sumPrimes(arr) {
	let counter
    let i=0,sum=0
    while(i<arr.length){
        counter=0
        for(let j=1;j<=arr[i];j++){
            if(arr[i]%j==0){
                counter++
            }
        }

        if(counter==2){
            sum=sum+arr[i]
        }
       i++
    }
    return sum
}

console.log(sumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))