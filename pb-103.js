/* 
Sadly, the mathematical world is biased in favor of square matrices. As such, this challenge will help rectangular matrices by making them square.

For example, for the matrix:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
This can be done by padding it with a column of zeroes on the right to get:

[
  [1, 2, 0],
  [3, 4, 0],
  [5, 6, 0]
]
While for the matrix:

[
  [1, 2, 3, 4],
  [5, 6, 7, 8]
]
One can pad it with two rows of zeros at the bottom to get:

[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]
Write a function that pads a rectangular matrix with zeros on the right or at the bottom to make it square. */
function completeSquare(arr) {
	if(arr.length>arr[0].length){

    let len=arr.length-arr[0].length
 
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<len;j++){
        arr[i].push(0)
      }
    }
  }else if(arr.length<arr[0].length){
    let result
    let len=arr[0].length-arr.length
      for(let i=0;i<len;i++){
        result=[]
        for(let j=0;j<arr[0].length;j++){
         result.push(0)
        }
        arr.push(result)
        result=[]
      
      }
  }
  return arr
}

console.log(completeSquare([[1, 8, 9], [3, 6, 7], [5, 4, 5], [7, 2, 3], [9, 0, 1]]))