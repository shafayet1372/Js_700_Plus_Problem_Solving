/* Given an integer size, return array of length size filled with 1s.

Example

For size = 4, the output should be
createArray(size) = [1, 1, 1, 1].
 */

function createArray(size) {
let arr=[]
for(let i=0;i<size;i++){
    arr.push(1)
}
return arr
}
console.log(createArray(4))