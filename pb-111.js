/* An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true 
if an array is positive dominant.

Examples
isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

isPositiveDominant([5, 0]) ➞ true

isPositiveDominant([0, -4, -1]) ➞ false
Notes
0 counts as neither a positive nor a negative value.
 */

function isPositiveDominant(a) {
	let arr=[...new Set(a)]
  let result=arr.filter(val=>val>0)
  let result1=arr.filter(val=>val<0)
  console.log(result1,result)
  return result.length<=result1.length?false:true
}

console.log(isPositiveDominant([1, 0, 0, -1]))