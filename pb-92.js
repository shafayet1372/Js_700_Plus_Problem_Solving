/* 
A noob programmer was given two simple tasks: sum and sort the elements of the given array
a = [a1, a2, ..., an]. He started with summing and did it easily, but decided to store the sum he found in some random 
position of the original array which was a bad idea. Now he needs to cope with the second task, sorting the original array a, 
and it's giving him trouble since he modified it.

Given the array shuffled, consisting of elements a1, a2, ..., an, a1 + a2 + ... + an in random order, return the sorted array of original elements a1, a2, ..., an.


Example

For shuffled = [1, 12, 3, 6, 2], the output should be
shuffledArray(shuffled) = [1, 2, 3, 6].

1 + 3 + 6 + 2 = 12, which means that 1, 3, 6 and 2 are original elements of the array.

For shuffled = [1, -3, -5, 7, 2], the output should be
shuffledArray(shuffled) = [-5, -3, 2, 7].
 */


function shuffledArray(shuffled) {
    let ar=shuffled.sort((a,b)=>a-b)
    console.log(ar)
    let sum
    for(let i=0;i<ar.length;i++){
       
        sum=0
        for(let j=0;j<ar.length;j++){
           if(j!=i){
               sum=sum+ar[j]
              
           }
        }
      
        if(sum==ar[i]){
            ar.splice(i,1)
            break
        }
    }
    return ar
    }





console.log(shuffledArray([2, -1, 2, 2, -1]))