/* A ship has to transport cargo from one place to another, while picking up cargo along 
the way. Given the total amount of cargo and the types of cargo holds in the ship as arrays, 
create a function that returns true if each weight of cargo can fit in one hold, and false if it can't.

"S" means 50 cargo space.
"M" means 100 cargo space.
"L" means 200 cargo space.
Examples
willFit(["M", "L", "L", "M"], [56, 62, 84, 90]) ➞ true

willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200]) ➞ false

willFit(["L", "L", "M"], [56, 62, 84, 90]) ➞ true */


function willFit(holds, cargo) {
let obj={
	S:'50',M:"100",L:"200"
}
return holds.every(val=>{
	return cargo.every(x=>x<=obj[val])
}) 

}


console.log(willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200]))