/* Give a sequence of integer to an array, determine whether it is possible to obtain a strictly increasing sequence by removing not more than one element from the array. */


const sequence1=[1,3,2,1]
const sequence2=[1,3,2]
const almostincreasingSequence=(sequence)=>{
  for(let i=0;i<sequence.length-1;i++){
    if(sequence[i]>sequence[i+1]){
      return false
    }
  }
  return true
} 
console.log(almostincreasingSequence(sequence1))
console.log(almostincreasingSequence(sequence2))