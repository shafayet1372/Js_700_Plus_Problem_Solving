// Arun is obsessed with primes, especially five. He considers a number to be luckiest if it has the highest number of five in it. 
//If two numbers have the same frequency of five, Arun considers the larger of them to be luckiest, and if there is no five in any number,
 //the first given number is considered luckiest. Help him choose the luckiest number.

// Examples
// getLuckiest([5, 12, 55, 11]) ➞ 55

// getLuckiest([5, 12, -55,  11]) ➞ -55

// getLuckiest([515, 1255, -55,  1]) ➞ 1255

// getLuckiest([44, 12, 7, 40]) ➞ 44
// Notes
// Return null if given an empty array.







function getLuckiest(arr) {
  if(arr.length==0){
    return null
  }else{
    if(!arr.some(val=>/[5]/g.test(val))){
      return arr[0]
    }else{
      let result=[]
      let num=2
      arr.forEach(val=>{

      if(/[5]/g.test(val)){
          let totalFive=val.toString().match(/[5]/g)
          if(totalFive.length>=num){
            num=totalFive.length
            result.push(val)
          }
        }
        
      })
      
     if(result.length>1){
       return result.sort((a,b)=>b-a)[0]
     }
     return result[0]
   }
  }
}

console.log(getLuckiest([515, 1255, -55,  1]))