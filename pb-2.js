/* Write a function that returns the sum of two numbers.
Write a function that returns the sum of all numbers regardless of # of params.
 */

const sum=(param1,param2)=>{
  return param1+param2
}

console.log(sum(1,3))

const sumAllParams=(...params)=>{
 return params.reduce((acc,val)=>{
  return acc+val
 },0)
}

console.log(sumAllParams(1,2,3,4,5,6))