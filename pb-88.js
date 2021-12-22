
/* Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a 
smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

Example

For items = [3, 5, 2, 4, 5], the output should be
arrayPreviousLess(items) = [-1, 3, -1, 2, 4]. */

function arrayPreviousLess(items) {
let ar=[]
let value
for(let i=0;i<items.length;i++){
     value=false
   for(let j=i-1;j>=0;j--){
     if(items[i]>items[j]){
         value=items[j]
         break;
     }
   }
   if(value){
       ar.push(value)
   }else{
       ar.push(-1)
   }
 
}
return ar
}
console.log(arrayPreviousLess([2, 2, 1, 3, 4, 5, 5, 3]))