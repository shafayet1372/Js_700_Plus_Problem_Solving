/* Special Arrays
An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that 
returns true if an array is special, and false otherwise.

Examples
isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// Index 2 has an odd number 9.

isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// Index 3 has an even number 8.
Notes */
N/A

function isSpecialArray(arr) {
	/*
  shortcut
  
  return arr.every((val,i)=>i%2==0 && val%2==0||i%2==1&& val%2==1) */
  
  for(let i=0;i<arr.length;i++){
    if(i%2==0 && arr[i]%2!=0){
      return false
    }else if(i%2==1 && arr[i]%2!=1){
      return false
    }
  }
  return true
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]))