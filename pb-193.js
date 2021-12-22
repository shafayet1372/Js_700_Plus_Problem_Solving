/* In this challenge, the work area will be a 4x4 matrix containing three types of characters:

@ Your position.
- A blank spot.
&, #, $ Collectible items.
From your starting point in the grid, you have to trace a route placing a x in every spot visited, following a sequence of letters with the directions to take:

l Left
r Right
u Up
d Down
input = "luur"
// left, up, up, right

grid = [
["-", "-", "-", "#"]
["-", "-", "$", "-"]
["-", "-", "-", "@"]
["-", "&", "-", "-"] ]

result = { route = [
["-", "-", "x", "x"],
["-", "-", "x", "-"],
["-", "-", "x", "@"],
["-", "&", "-", "-"] ],
items: "$#" }
When moves are finished, you will have a new grid with the traced given route (a route made of x chars), and a series of items collected along the way.

Given a matrix grid and a string with the directions to take input, implement a function that returns an object literal containing the traced route as a new matrix 
and the items collected as a string.

Examples
function routeTracer([
  ["-", "#", "-", "-"],
  ["$", "#", "@", "&"],
  ["-", "#", "$", "&"],
  ["$", "-", "&", "-"]
], "lddr",) ➞ {
  route: [
 ["-", "#", "-", "-"],
  ["$", "x", "@", "&"],
  ["-", "x", "$", "&"],
  ["$", "x", "x", "-"]
  ],
  items: "##&"
}
Notes
The starting position must not be changed in the new matrix.
The x will overwite the symbol already present in the spot visited.
In the returned string, items have to appear in the order you collected them. Watch out for the blank spots: they're not collectible!
Don't worry about "out of bounds" cases, instruction strings contain only valid routes.
Instruction strings will have different lengths. */







function routeTracer(grid, input) {
	let CollectedItems=['$','#','&']
	let collectedFinally=[],val,found=false
        input=input.split("")
	
	for(let i=0;i<grid.length;i++){
         if(grid[i].indexOf("@")>=0){
		  let index=grid[i].indexOf("@")
		   found=true
		 
		for(let j=0;j<input.length;j++){
			 
			if(input[j]=='l'){
			 val=grid[i][index-1]
			 grid[i][index-1]="x"
			 index--
			
		    }else if(input[j]=='u'){
				console.log(j)
				i=i-1
				val=grid[i][index]
				grid[i][index]='x'
				console.log(i)
			}else if(input[j]=='d'){
				i++
				val=grid[i][index]
				grid[i][index]='x'
			}else{
				index++
				val=grid[i][index]
				grid[i][index]="x"	
			}
			CollectedItems.indexOf(val)>=0?collectedFinally.push(val):""
	           }
	
	     }
          if(found){
			break;
		}
           }

	return {route: [...grid], items:collectedFinally.join("")}
}

console.log(routeTracer([ ["-", "#", "&", "-"],
["-", "#", "-", "$"],
 ["@", "#", "&", "&"],
["-", "$", "-", "$"] ], "druulurrrd"))





