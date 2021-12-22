// Taking each four digit number of an array in turn, return the number that you are on when all of the digits 0-9 have been discovered. 
If not all of the digits can be found, return "Missing digits!".

// Examples
// findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) ➞ 5057
// // digits found:  517-  4-38  29-6  -0

// findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) ➞ 3370
// // digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0

// findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) ➞ "Missing digits!"
// // digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// // 0 and 1 are missing






function findAllDigits(nums) {
	let digits=[]
  let found=false
  for(let i=0;i<nums.length;i++){
    let digit=nums[i].toString().split("")
    for(let j=0;j<digit.length;j++){
      if(digits.indexOf(digit[j])==-1){
        digits.push(digit[j])
      }
      if(digits.length==10){
        found=true
        break;
      }
    }
    if(found){
     return nums[i]
    }
  }
  return "Missing digits!"
}

console.log(findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]))