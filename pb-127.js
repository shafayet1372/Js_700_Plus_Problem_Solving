/* 
Abigail and Benson are playing Rock, Paper, Scissors.

Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.

Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".

R stands for Rock
P stands for Paper
S stands for Scissors
Examples
calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]) ➞ "Abigail"

// Benson wins the first game (Paper beats Rock).
// Abigail wins the second game (Rock beats Scissors).
// Abigail wins the third game (Scissors beats Paper). 
// Abigail wins 2/3.

calculateScore([["R", "R"], ["S", "S"]]) ➞ "Tie"

calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) ➞ "Tie"

 */
function calculateScore(games) {
  let abigail=0
  let benson=0
  for(let i=0;i<games.length;i++){
      let[a,b]=games[i]
      if(a=="R" && b=="P"){
          benson++
      }else if(a=="P" && b=="R"){
          abigail++
      }else if(a=="R" && b=="S"){
          abigail++
      }else if(a=="S" && b=="R"){
        benson++
    }else if(a=="S" && b=="P"){
        abigail++
    }else if(a=="P" && b=="S"){
        benson++
    }
  }
  if(abigail==benson){
      return "Tie"
  }else if(abigail>benson){
      return "Abigail"
  }else{
      return "Benson"
  }
}

console.log(calculateScore([["R", "P"], ["R", "S"], ["S", "P"]]))