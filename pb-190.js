/* 
Images can be described as a 3D array.

// This image has only one white pixel:

[
  [[255, 255, 255]]
]
// This one is a 2 by 2 black image:

[
  [[0, 0, 0], [0, 0, 0]],
  [[0, 0, 0], [0, 0, 0]]
]
Your task is to create a function that takes a 3D array representation of an image and returns the inverse of that.

For example, white becomes black, black becomes white, etc.

Examples
invert([
  [[255, 255, 255], [255, 255, 255]],
  [[255, 255, 255], [255, 255, 255]]
]) ➞ [
  [[0, 0, 0], [0, 0, 0]],
  [[0, 0, 0], [0, 0, 0]]
] */







function invert(arr) {
   for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
      for(let k=0;k<arr[i][j].length;k++){
       let val= arr[i][j][k]
          
           if(val>=255){
            arr[i][j][k]=0
           }else if(val<0){
            arr[i][j][k]=255
            console.log(k)
           }else{
            arr[i][j][k]=255-val
           }
      }
    }
  }
  return arr
}

console.log(invert([
	[[0,255,255], [256,255,255]],
	[[255,-1,255], [255,255,255]]
]))