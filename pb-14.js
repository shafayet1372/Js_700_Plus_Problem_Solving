/* Some people are standing in a row in a park. There are trees between them which cannot be moved
. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall! */


const arr = [-1, 150, 190, 170, -1, -1, 160, 180]
function sortByHeight(arr) {
  let swap
  for(let i=0;i<arr.length;i++){
   for(let j=i+1;j<arr.length;j++){
     if((arr[i]!=-1 && arr[j]!=-1) &&arr[i]>arr[j]){
       swap=arr[i]
       arr[i]=arr[j]
       arr[j]=swap
     }
   }
  
  }
  return arr
  }
console.log(sortByHeight(arr))