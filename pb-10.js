/* After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, 
but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms
 below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of 
all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
 */
const arr=[[0, 1, 1, 2], 
[0, 5, 0, 0], 
[2, 0, 3, 3]]

function matrixElementsSum(matrix) {
 let hauntedRoom=[]
 let sum=0
 for(let i=0;i<matrix.length;i++){
  
  for(let j=0;j<matrix[i].length;j++){
    if(matrix[i][j]==0 && !hauntedRoom.includes(j)){
      hauntedRoom.push(j)
    }
  
    if(!hauntedRoom.includes(j) && matrix[i][j]!=0){
      sum=sum+matrix[i][j]
   }
   
  }
  
 }
return sum
}

console.log(matrixElementsSum(arr))
