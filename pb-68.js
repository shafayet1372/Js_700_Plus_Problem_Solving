/* We define the middle of the array arr as follows:

if arr contains an odd number of elements, its middle is the element whose index number is the same when
 counting from the beginning of the array and from its end;
if arr contains an even number of elements, its middle is the sum of the two elements
 whose index numbers when counting from the beginning and from the end of the array differ by one.
An array is called smooth if its first and its last elements are equal to one another and 
to the middle. Given an array arr, determine if it is smooth or not. */
function isSmooth(arr) {
let middle;
if(arr.length%2==0){
    middle=arr[arr.length/2]+arr[(arr.length/2)-1]
}else{
    middle=arr[Math.floor(arr.length/2)]
}
if(arr[0]==middle && arr[0]==arr[arr.length-1] && middle==arr[arr.length-1]){
    return true
}
return false

}


console.log(isSmooth([7, 2, 2, 5, 10, 7]))