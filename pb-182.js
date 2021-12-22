/* 
Write a function that replaces every row and column that contains at least one 1 into a row/column that is filled
 entirely with 1s.

Examples
onesInfection([
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
]) ➞ [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1]
]

onesInfection([
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0]
]

onesInfection([
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [1, 1, 1, 1]
]
 */










function onesInfection(arr) {

  let indexOfOne=arr.reduce((acc,val,i)=>{
    if(val.indexOf(1)>=0){
      return[...acc,i]
    }
    return acc
  },[])
  
    for(let i=0;i<arr.length;i++){
    let visited=[]
    for(let j=0;j<arr[i].length;j++){
      if(arr[i][j]==1 && (visited.indexOf(j)==-1 && indexOfOne.indexOf(i)>=0 )){
        let m=i+1
        let l=arr.length-1
        for(let k=0;k<arr[i].length;k++){
          
           if(arr[i][k]==0){
            arr[i][k]=1
            visited.push(k)
           }
           
           if(m<arr.length){
            arr[m][j]=1
            
            m++
          }
          if(l>=0){
            arr[l][j]=1
            l--
          }
          
        }
    
      }
    }
  
  }
  return arr
}

console.log(onesInfection(
  [
    [0, 0, 0], 
    [1, 0, 0]
    ]))