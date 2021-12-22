
/* Elections are in progress!

Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet,
 find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes,
 assume there is no winner at all.

Example

For votes = [2, 3, 5, 2] and k = 3, the output should be
electionsWinners(votes, k) = 2.
 */
function electionsWinners(votes, k) {
let counter=0
let bigCounter=0
votes=votes.sort((a,b)=>a-b)
let big=votes[votes.length-1]
let i=0
while(i<votes.length){
  if(votes[i]+k>big){
    counter++
  }
  if(votes[i]==big){
   bigCounter++
  }
  i++
}
 if(bigCounter==1 && k==0){
   return 1 
 }
 return counter
}


console.log(electionsWinners([5, 1, 3, 4, 1],0))