/* Create a function that takes four arrays as arguments and returns a count of the total number of identical arrays.

Examples
countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]) ➞ 2

countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]) ➞ 0

countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]) ➞ 3 */


function countIdenticalArrays(arr1, arr2, arr3, arr4) {
	let arrBox=[[...arr1],[...arr2],[...arr3],[...arr4]]
  let cmp=[]
  let counter=0
  for(let i=0;i<arrBox.length;i++){
    let ar1=arrBox[i].join("")
   
     if(cmp.indexOf(ar1)==-1){
        for(let j=i+1;j<arrBox.length;j++){
          let ar2=arrBox[j].join("")
          if(ar1==ar2){
            console.log(ar1,ar2,i,j)
            counter++
          }
        }
     }
     cmp.push(ar1)
  }
return counter>0?counter+1:0
}

console.log(countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]))