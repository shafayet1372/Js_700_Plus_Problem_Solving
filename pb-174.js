// Write a function that returns true if there exists a row that is identical to a column in a 2-D matrix, otherwise false.

// To illustrate:

// [
//   [1, 2, 3, 4],
//   [2, 4, 9, 8],
//   [5, 9, 7, 7],
//   [6, 8, 1, 0]
// ]

//  2nd row + 2nd column are identical: [2, 4, 9, 8]
// Examples
// hasIdentical([
//   [4, 4, 4, 4],
//   [2, 4, 9, 8],
//   [5, 4, 7, 7],
//   [6, 4, 1, 0]
// ]) ➞ true

// hasIdentical([
//   [4, 4, 9, 4],
//   [2, 1, 9, 8],
//   [5, 4, 7, 7],
//   [6, 4, 1, 0]
// ]) ➞ false

// hasIdentical([
//   [4, 4]
//   [2, 1]
// ]) ➞ false

// hasIdentical([
//   [4, 2]
//   [2, 1]
// ]) ➞ true











function hasIdentical(arr) {
  let col
  let find=false
  for(let i=0;i<arr.length;i++){
    let rowval=arr[i].slice().join("")
    for(let j=0;j<arr.length;j++){
       col=[]
      for(let m=0;m<arr.length;m++){
        col.push(arr[m][j])
      }
      
      let colval=col.slice().join("")
      
      if(rowval==colval){
        find=true
        break;
      }
    }
     if(find){
       return true
     }
  }
  return find
}

console.log(hasIdentical([
  [1, 2, 3, 4],
  [2, 4, 9, 8],
  [5, 9, 7, 7],
  [6, 8, 1, 0]
]))