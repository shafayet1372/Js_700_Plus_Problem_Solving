/* Given two cells on the standard chess board, determine whether they have the same color or not. */

function chessBoardCellColor(cell1, cell2) {
const cellName=['A',"B","C","D","E","F","G","H"]
cell1=cell1.split("")
cell2=cell2.split("")
let color1
let color2

const deterMineColor=(cellName,groupName)=>{
  if(cellName.indexOf(groupName[0])%2==0){
    if(parseInt(groupName[1])%2==0){
      return'white'
    }else{
      return "red"
    }
  }else{
    if(parseInt(groupName[1])%2==0){
      return 'red'
    }else{
      return "white"
    }
  }
}
color1=deterMineColor(cellName,cell1)
color2=deterMineColor(cellName,cell2)
return color2==color1



}

console.log(chessBoardCellColor("D2","D2"))