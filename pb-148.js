/* Create a function that takes a variable number of arguments, each argument representing the number of items in a 
group, and returns the number of permutations (combinations) of items that you could get by taking one item from each group.

Examples
combinations(2, 3) ➞ 6

combinations(3, 7, 4) ➞ 84

combinations(2, 3, 4, 5) ➞ 120
Notes
Don't overthink this one.
Input may include the number zero.



 */


function combinations(...items) {
	
  return items.reduce((acc,val)=>{
  if(val!=0){
    acc= acc*val
  }
  return acc
  },1)
}

console.log(combinations(6, 7, 0))