// Create a function that takes in an array of numbers or strings and returns an array with the items from the original 
array stored in subarrays. Items of the same value should be in the same subarray.

// Examples
// advancedSort([2, 1, 2, 1]) ➞ [[2, 2], [1, 1]]

// advancedSort([5, 4, 5, 5, 4, 3]) ➞ [[5, 5, 5], [4, 4], [3]]

// advancedSort(["b", "a", "b", "a", "c"]) ➞ [["b", "b"], ["a", "a"], ["c"]]
// Notes
// The subarrays should be returned in the order of each element's first appearance in the given array.

function advancedSort(arr) {
  let visitied=[],result=[]
  let box
	for(let i=0;i<arr.length;i++){
    box=[]
    if(visitied.indexOf(arr[i])==-1){
      for(let j=i;j<arr.length;j++){
        if(arr[i]==arr[j]){
          box.push(arr[i])

        }
      }
      result.push(box)
      visitied.push(arr[i])
    }
 
   
  }
  return result
}

console.log(advancedSort(["b", "a", "b", "a", "c"]))