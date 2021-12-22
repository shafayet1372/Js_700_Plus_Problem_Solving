// Create a function that takes an array, finds the most repeated element(s) within it and returns it/them in an array (order not important). 
//The function should work for both integers and strings mixed together within the input array (e.g. [1, 1, "a"]).

// Examples
// highestOccurrence([2, 3, 2, 5, 6, 7, 2]) ➞ [2]

// highestOccurrence([1, 2, 3, 3, "a", "b", "b", "c"]) ➞ [3, "b"]

// highestOccurrence(["it", "keeps", "coding", "on", "or", "it", "gets", "the", "hose"]) ➞ ["it"]
// Notes
// If there is a tie for highest occurrence, return both (see second example above).
// Don't let integers become strings and/or string become integers in the result.
// NaN counts as a number.





function highestOccurrence(arr) {
  let counter
  let visited=[]
  let  newar=arr.map(val=>{
    counter=0
    if(visited.indexOf(val)==-1){
      
     arr.forEach(x=>{
       if(x==val && typeof x== typeof val){
         counter++
       }
     })
    }
    visited.push(val)
    return counter
  })
  let highest=newar.slice().sort((a,b)=>b-a)[0]
 
  return newar.reduce((acc,val,i)=>{
       if(val==highest){
         acc.push(arr[i])
       }
       return acc
  },[])
 
}

console.log(highestOccurrence([2,2,"2","2",4,4]))