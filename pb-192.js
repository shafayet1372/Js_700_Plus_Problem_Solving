/* 

Create a function that takes a 5x5 3D array and returns true if it has at least one Bingo, and false if it doesn't.

Examples
bingoCheck([
  [45, "x", 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, 39, 44],
  [21, "x", 24, 30, 52]
]) ➞ true

bingoCheck([
  ["x", 43, 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, 65, "x", 83, 54],
  [67, 98, 39, "x", 44],
  [21, 59, 24, 30, "x"]
]) ➞ true

bingoCheck([
  ["x", "x", "x", "x", "x"],
  [64, 12, 47, 32, 90],
  [37, 16, 68, 83, 54],
  [67, 19, 98, 39, 44],
  [21, 75, 24, 30, 52]
]) ➞ true

bingoCheck([
  [45, "x", 31, 74, 87],
  [64, 78, 47, "x", 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, "x", 44],
  [21, "x", 24, 30, 52]
]) ➞ fals */







function bingoCheck(board) {
let result=[]
for(let i=0;i<board.length;i++){
 for(let j=0;j<board[i].length;j++){
   if(board[i][j]=='x'){
     result.push(j)
   }
 }
}
result.sort((a,b)=>a-b)

if(result[0]<result[result.length-1] || result[0]>result[result.length-1]){
  let index=result[0]
  return result.every(val=>val==index++)
}else {
  let index=result[0]
  return result.every(val=>val==index)
}
}

console.log(bingoCheck([
  [45, "x", 31, 74, 87],
  [64, 78, 47, "x", 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, "x", 44],
  [21, "x", 24, 30, 52]
]))