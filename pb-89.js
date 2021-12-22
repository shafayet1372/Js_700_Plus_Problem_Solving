/* Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

type indicates if it's a left or a right shoe;
size is the size of the shoe.
Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

Example

For

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [0, 23]]
the output should be
pairOfShoes(shoes) = true;

For

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [1, 23]]
the output should be
pairOfShoes(shoes) = false
 */

function pairOfShoes(shoes) {
   let len=shoes.length
    let result=[]
    for(let i=0;i<shoes.length;i++){
       let[a,b]=shoes[i]
       for(let j=i+1;j<shoes.length;j++){
           let [m,n]=shoes[j]
           if(m!=a && b==n){
               result.push(true)
               shoes.splice(j,1)
               break;
           }
       }
        }
        return len/2==result.length
}

console.log(pairOfShoes([[0, 21], 
    [1, 23], 
    [1, 21], 
    [1, 23]]))