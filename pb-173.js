// Write a function that diagonally orders numbers in a n x n matrix, depending on which of the four corners you originate from: upper-left (ul), 
//upper-right (ur), lower-left (ll), lower-right (lr).

// Examples
// diagonalize(3, "ul") ➞ [
//   [0, 1, 2],
//   [1, 2, 3],
//   [2, 3, 4]
// ]

// diagonalize(4, "ur") ➞ [
//   [3, 2, 1, 0],
//   [4, 3, 2, 1],
//   [5, 4, 3, 2],
//   [6, 5, 4, 3]
// ]

// diagonalize(3, "ll") ➞ [
//   [2, 3, 4],
//   [1, 2, 3],
//   [0, 1, 2]
// ]

// diagonalize(5, "lr") ➞ [
//   [8, 7, 6, 5, 4],
//   [7, 6, 5, 4, 3],
//   [6, 5, 4, 3, 2],
//   [5, 4, 3, 2, 1],
//   [4, 3, 2, 1, 0]
// ]




function diagonalize(n, dir) {
  let arr1=[]
  let j=0, m=0
  for(let i=0;i<n;i++){
    let arr2=[]
    for(j;j<n+m;j++){
       if(dir=='ur' || dir=='lr'){
        arr2.unshift(j)
       }else{
        arr2.push(j)
       }
    }
    if(dir=='ur' || dir=='lr'){
      j=arr2[arr2.length-2]
     }else{
      j=arr2[1]
     }
  
    m++
    if(dir=="ul" || dir=='ur'){
      arr1.push(arr2.slice())
    }else if(dir=='ll' ||'lr'){
      arr1.unshift(arr2.slice())
    }
  }
 return arr1
}

console.log(diagonalize(4, "ur"))