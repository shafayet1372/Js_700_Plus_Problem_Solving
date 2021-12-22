/* Write a function that squishes an array from the left or the right.

Examples
squish([1, 2, 3, 4, 5], "left")
➞ [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]

squish([1, 2, 3, 4, 5], "right")
➞ [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]

squish([1, 0, 2, -3], "left")
➞ [[1, 0, 2, -3], [1, 2, -3], [3, -3], [0]]

squish([1, 0, 2, -3], "right")
➞ [[1, 0, 2, -3], [1, 0, -1], [1, -1], [0]]
Notes
Squishing from the left is to successively sum the first two elements of an array (shortening the array in the process).
Squishing from the right is to successively sum the last two elements of an array.
Include the original array as the first element in either squish.
Return an empty array if the input is an empty array. */







function squish(arr, d) {
if(arr.length==0){
	return []
}else if(arr.length==1){
	return [arr]
}else{
let result=[]
let squi=(ar,d)=>{
let sqar
if(d=='left'){
sqar=ar.slice(2,ar.length)
sqar.unshift(ar[0]+ar[1])

return sqar
}
sqar=ar.slice(0,ar.length-2)
sqar.push(ar[ar.length-1]+ar[ar.length-2])
return sqar


}
let v=[],i=0
while(v.length!=1){
   if(i==0){
      result.push(arr)
    }else{
      result.push(squi(arr,d))
      v=squi(arr,d)
      arr=v
	}
      i++
}
   return result
}

}

console.log(squish([8], "left")