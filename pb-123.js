/* In (American) Football, a team can score if they manage to kick a ball through the goal (i.e. above the crossbar and between the uprights).

Create a function that returns true if the ball 0 goes through the goal. You will be given an array of arrays.

Examples
isGoalScored([
  ["  #     #  "],
  ["  #  0  #  "],
  ["  #     #  "],
  ["  #######  "],
  ["     #     "],
  ["     #     "],
  ["     #     "]
]) ➞ true

isGoalScored([
  ["  #0    #  "],
  ["  #     #  "],
  ["  #     #  "],
  ["  #######  "],
  ["     #     "],
  ["     #     "],
  ["     #     "]
]) ➞ true

isGoalScored([
  ["  #     #  "],
  ["  #     #  "],
  ["  #     # 0"],
  ["  #######  "],
  ["     #     "],
  ["     #     "],
  ["     #     "]
]) ➞ false

 */


function isGoalScored(goal) {
	let result=false
    let found=0
    for(let i=0;i<goal.length;i++){
      let value=goal[i].join("")
      for(let j=0;j<value.length;j++){
          if(value[j]=="0"&&(i<3 &&(j>2 &&j<9))){
             result=true
             found=1
             break
          }
      }
      if(found){
          break
      }
    }
    return result
}


console.log(isGoalScored([
	["  #     #  "],
	["  #     #  "],
	["  #     #  "],
	["  ###0###  "],
	["     #     "],
	["     #     "],
	["     #     "]
]))


  let s= "  #     #  "
  for(let k=0;k<s.length;k++){
      console.log(k,s[k])
  }