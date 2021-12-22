// Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in 
an array (where N is the length of the array).

// Examples
// majorityVote(["A", "A", "B"]) ➞ "A"

// majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"

// majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null
// Notes
// The frequency of the majority element must be strictly greater than 1/2.
// If there is no majority element, return null.
// If the array is empty, return null.


function majorityVote(arr) {
	let visited=[],counter,small=-10000,result=null,votes=[]
  let uniqVal=[...new Set(arr)]
  
  for(let i=0;i<arr.length;i++){
    counter=0
    
    if(visited.indexOf(arr[i])==-1){
      for(let j=i;j<arr.length;j++){
        if(arr[i]==arr[j]){
          counter++
        }
      
      }
     
      if(counter>=small){
        small=counter
        result=arr[i]
        
      }
      visited.push(arr[i])
      votes.push(counter)
    }
    
  }
  if(votes.length==0){
    return result
  }else{
    if(uniqVal.length>1){
      let findresult=votes.every(val=>val==small)
     
      if(!findresult){
        return result
      }else{
        return null
      }
    }else{
      return uniqVal[0]
    }
  }
  

 
}

console.log(majorityVote(["B","B","A"]))