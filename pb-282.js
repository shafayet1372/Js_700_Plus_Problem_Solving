/* Frequency Distribution
Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the
 unique elements and the values are the frequency in which those elements occur.

Examples
getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

getFrequencies([]) ➞ {}
Notes
If given an empty array, return an empty object (see example #4).
The object should be in the same order as in the input array.
 */





function getFrequencies(arr) {

 /*shortcut
 
 return arr.reduce((acc,val)=>{
   if(acc[val]){
     acc[val]++
   }else{
     acc[val]=1
   }
   return acc
  },{})
 */



  let result = {}
  let visited = []
  for (let i = 0; i < arr.length; i++) {
    let counter = 0
    if (visited.indexOf(arr[i]) == -1) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          counter++
        }
      }

      visited.push(arr[i])
      typeof arr[i] == "string" ? result[arr[i]] = counter : result[arr[i].toString()] = counter
    }


  }
  return result
}

console.log(getFrequencies([1, 2, 3, 3, 2]))