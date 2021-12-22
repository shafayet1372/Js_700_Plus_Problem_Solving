/* 
Write a function that returns true if exactly one word in the array differs in length from the rest. Return false in all other cases.

Examples
oddOneOut(["silly", "mom", "let", "the"]) ➞ true

oddOneOut(["swanky", "rhino", "moment"]) ➞ true

oddOneOut(["the", "them", "theme"]) ➞ false

oddOneOut(["very", "to", "an", "some"]) ➞ false

 */




function oddOneOut(arr) {

  let result=[]
  let visited=[]
  for(let i=0;i<arr.length;i++){
    let counter=1
    if(visited.indexOf(arr[i].length)==-1){
       for(let j=i+1;j<arr.length;j++){
         if(arr[i].length==arr[j].length){
           counter++
         }
       }
       result.push(counter)
       visited.push(arr[i].length)
    }
  }
  let uniVal=[...new Set(result)]
  
  return uniVal.length==1?false:true
  }
  
  console.log(oddOneOut(["swanky", "rhino", "moment"]))