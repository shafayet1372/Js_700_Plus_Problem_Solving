// If today was Monday, in two days, it would be Wednesday.

// Create a function that takes in an array of days as input and the number of days to increment by. Return an array of days after n number of days has passed.

// Examples
// afterNDays(["Thursday", "Monday"], 4) ➞ ["Monday", "Friday"]

// afterNDays(["Sunday", "Sunday", "Sunday"], 1) ➞ ["Monday", "Monday", "Monday"]

// afterNDays(["Monday", "Tuesday", "Friday"], 1) ➞ ["Tuesday", "Wednesday", "Saturday"]
// Notes
// Return as an array.
// All test cases will have the first letter of each day capitalized.
// n number of days may be greater than 7.



function afterNDays(days, n) {
     let day=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday"]
     let result=[]
   for(let i=0;i<days.length;i++){
     let mainDayNum=day.indexOf(days[i])+n
     console.log(mainDayNum)
    if(mainDayNum>6){
     result.push(day[(mainDayNum-day.length)%7])
    }else{
      result.push(day[mainDayNum])
    }
   }
  return result
}

console.log(afterNDays(["Monday","Friday","Wednesday"], 15))