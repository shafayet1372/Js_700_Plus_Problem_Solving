/* Sort the Unsortable
In this challenge you will be given an array similar to the following:

[[3], 4, [2], [5], 1, 6]
In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably
 be sorted according to "the content of the elements" as:

[1, [2], [3], 4, [5], 6]
Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

Examples
sortIt([4, 1, 3]) ➞ [1, 3, 4]

sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

sortIt([4, [1], 3]) ➞ [[1], 3, 4]

sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]
Notes
To reiterate, elements of the array will be either integers or arrays with a single integer. */







function sortIt(arr) {
  let a,b
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i].length) {
      a = arr[i][0]
    } else {
      a = arr[i]
    }
    for (let j = i + 1; j < arr.length; j++) {
      
      if (arr[j].length) {
        b = arr[j][0]
      } else {
        b = arr[j]

      }
  
      if (a > b) {

        let swap = arr[i]
        arr[i] = arr[j]
        arr[j] = swap
        a=arr[i]
        
      }
    }
  }
  return arr
}

console.log(sortIt([[4], [1], [3]]))