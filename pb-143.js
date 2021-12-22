/* Given num as input, return an array with all primes up to num included.

Alternative Text

Examples
eratosthenes(1) ➞ []

eratosthenes(10) ➞ [2, 3, 5, 7]

eratosthenes(20) ➞ [2, 3, 5, 7, 11, 13, 17, 19]

eratosthenes(0) ➞ []
 */


function eratosthenes(n) {
	let result=[]
  let counter
  for(let i=1;i<=n;i++){
    counter=0
    for(let j=1;j<=i;j++){
      if(i%j==0){
        counter++
      }
    }
    if(counter==2){
        result.push(i)
    }
  }
  return result
}

console.log(eratosthenes(10))