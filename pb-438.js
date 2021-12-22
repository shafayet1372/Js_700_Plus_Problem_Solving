/* Stand in Line
Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. 
The function should then return the updated array.

Examples
nextInLine([5, 6, 7, 8, 9], 1) ➞ [6, 7, 8, 9, 1]

nextInLine([7, 6, 3, 23, 17], 10) ➞ [6, 3, 23, 17, 10]

nextInLine([1, 10, 20, 42 ], 6) ➞ [10, 20, 42, 6]

nextInLine([], 6) ➞ "No array has been selected"
Notes
For an empty array input, return: "No array has been selected"
 */




function nextInLine(arr, num) {
  if(!arr.length){
    return "No array has been selected"
  }
	arr[arr.length]=num
  arr.shift()
  return arr
}

console.log(nextInLine([5, 6, 7, 8, 9], 1))