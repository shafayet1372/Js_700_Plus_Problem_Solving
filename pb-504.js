/* Longest Daily Streak
Create a function that takes an array of booleans that represent whether or not a player has logged into a game that day. Output the 
longest streak of consecutive logged in days.

Examples
dailyStreak([true, true, false, true]) ➞ 2

dailyStreak([false, false, false]) ➞ 0

dailyStreak([true, true, true, false, true, true]) ➞ 3
Notes
Return your output as an integer.
If a given array is all false, return 0 (see example #2 */


function dailyStreak(arr) {

  let num = -1000
  for (let i = 0; i < arr.length; i++) {
    let counter = 0
    for (let j = i; j < arr.length; j++) {
      if (arr[j]) {
        counter++
      } else {
        break;
      }
    }
    if (counter > num) {
      num = counter
    }
  }
  return num
/*   
//another way
let counter=0,result=[]
  for(let i=0;i<arr.length;i++){
    if(arr[i] && i!=arr.length-1){
      counter++
    }else if(arr[i] && i==arr.length-1){
      counter++
      result.push(counter)
    }else{
      result.push(counter)
      counter=0
    }
  }
  return result.sort((a,b)=>b-a)[0] */
}

console.log(dailyStreak([true, false, true, true]))