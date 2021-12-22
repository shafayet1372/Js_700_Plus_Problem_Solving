/* Given an integer n, find the minimal k such that

k = m! (where m! = 1 * 2 * ... * m) for some integer m;
k >= n.
In other words, find the smallest factorial which is not less than n.

Example

For n = 17, the output should be
leastFactorial(n) = 24.

17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).
 */


function leastFactorial(n) {
    let result
    for(let i=1;i<=n;i++){
        result=1
        for(let j=1;j<=i;j++){

            result=result*j
        }
        if(result>=n){
            break;
        }
    }
 return result
}


console.log(leastFactorial(24))