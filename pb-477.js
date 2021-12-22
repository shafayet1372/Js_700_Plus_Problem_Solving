/* Boolean Chain
Write three functions:

AND
OR
XOR
These functions should evaluate an array of true and false values, starting from the leftmost element and evaluating pairwise.

Examples
and([true, true, false, true]) ➞ false
// and([true, true, false, true]) => and([true, false, true]) => and([false, true]) => false

or([true, true, false, false]) ➞ true
// or([true, true, false, true]) => or([true, false, false]) => or([true, false]) => true

xor([true, true, false, false]) ➞ false
// xor([true, true, false, false]) => xor([false, false, false]) => xor([false, false]) => false
Notes
XOR is the same as OR, except that it excludes [true, true].
Each time you evaluate an element at 0 and at 1, you collapse it into the single result. */



function and(arr) {
  /*
  shortway
  return arr.some(val=>val==false)?false:true */
  let val = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (val == arr[i]) {
      val = arr[i]
    } else {
      val = false
    }

  }
  return val

}
console.log(and([true, true, true, true]))
function or(arr) {

  /* 
  return arr.some(val=>val==true)?true:false */
  let val = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != val) {
      val = true
    } else {
      val = arr[i]
    }
  }
  return val
}

console.log(or([true, true, false, false]))

function xor(arr) {
  let val = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if ((val && arr[i]) || (!val && !arr[i])) {
      val = false
    } else {
      val = true
    }
  }
  return val

}

console.log(xor([true, true, false, false]))