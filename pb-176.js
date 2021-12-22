// Create a function that will build a staircase using the underscore _ and hash # symbols. A positive value denotes the staircase's upward 
//direction and downwards for a negative value.

// Examples
// staircase(3) ➞ "__#\n_##\n###"
// __#
// _##
// ###

// staircase(7) ➞ "______#\n_____##\n____###\n___####\n__#####\n_######\n#######"
// ______#
// _____##
// ____###
// ___####
// __#####
// _######
// #######

// staircase(2) ➞ "_#\n##"
// _#
// ##

// staircase(-8) ➞ "########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#"
// ########
// _#######
// __######
// ___#####
// ____####
// _____###
// ______##
// _______#
// Notes
// All inputs are either positive or negative values.
// The string to be returned is adjoined with the newline character (\n).
// A recursive version of this challenge can be found here.








function staircase(n) {
  let result=[]
  let k=n
  n=n<0?n*(-1):n
  let m=n-1
  for(let i=0;i<n;i++){
    let stair=[]
    for(let j=0;j<n;j++){
     if(k>0){
      if(j<m){
        stair.push("_")
      }else{
        stair.push("#")
      }
     }else{
      if(j<=m){
        stair.unshift("#")
      }else{
        stair.unshift("_")
      }
     }
    }
    m--
    if(!(i==n-1)){
      stair.push('\n')
      
    }
    result.push(stair)
  
  }
  
 

  return result.reduce((acc,val)=>{
    return [...acc,...val]
   },[]).join("")

}

console.log(staircase(-8))