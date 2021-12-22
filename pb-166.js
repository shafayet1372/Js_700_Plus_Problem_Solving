// Create a function that takes an array and return the most frequently occuring element contained within it.

// Examples
// findFrequent([3, 7, 3]) ➞ 3

// findFrequent([null, "hello", true, null]) ➞ null

// findFrequent([false, "up", "down", "left", "right", true, false]) ➞ false
// Notes
// N/A






function findFrequent(arr) {
	let index, num=-1000,counter
  let visited=[]
  for(let i=0;i<arr.length;i++){
    counter=0
     if(visited.indexOf(arr[i])==-1){
       for(let j=0;j<arr.length;j++){
         if(arr[i]==arr[j] && typeof arr[j]=='number'){
           counter++
         }
       }
     }
     visited.push(arr[i])
     if(counter>num ){
       num=counter
       index=i
     }
    
  }
  return arr[index]
}

console.log(findFrequent([1, 2, -3, true, false, undefined, "yes", "yeah", "yup", 2]))