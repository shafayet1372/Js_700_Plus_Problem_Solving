/* Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0 */

function countTrue(arr) {
	let counter=0
  for(let i=0;i<arr.length;i++){
    if(arr[i]==true){
      counter++
    }
  }
  return counter
}

console.log(countTrue([true, false, false, true, false]))