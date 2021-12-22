/* Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

Examples
commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []
Notes
Arrays are sorted.
Try doing this problem with O(n + m) time complexity. */



function commonElements(arr1, arr2) {
	let result=[]
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
          result.push(arr1[i])
        }
    }
  }
  return [...new Set(result)]
}

console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]))