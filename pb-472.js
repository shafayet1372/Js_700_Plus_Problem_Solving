/* Back and Forth
In a board game, a player may pick up a card with several left or right facing arrows, with the number of arrows indicating the number of tiles to move. 
The player should move either left or right, depending on the arrow's direction.

Given an array of the arrows contained on a player's cards, return a singular string of arrowheads that are equivalent to all of the arrowheads.

Worked Example
calculateArrowhead([">>", "<<", "<<<"]) ➞ "<<<"
// >> means to move 2 places right
// << means to move 2 places left (cancelling out >>)
// <<< means to move a further 3 places left
// overall, the movement can be written as <<<
Examples
calculateArrowhead([">>>>", "<", "<", "<"]) ➞ ">"

calculateArrowhead([">", "<", ">>", "<", "<<<"]) ➞ "<<"

calculateArrowhead([">>>", "<<<"]) ➞ ""
Notes
Return an empty string if all the arrowheads cancel out. */




function calculateArrowhead(arr) {
  let s = arr.join("")
  let arroRight = s.match(/[>]/g)?s.match(/[>]/g).length:0
  let arroleft = s.match(/[<]/g)? s.match(/[<]/g).length:0
  let finalArro, len, newstr = ""
  if (arroRight > arroleft) {
    finalArro = '>'
    len = arroRight - arroleft
  } else{
    finalArro = '<'
    len = arroleft - arroRight
  } 
  for (let i = 0; i < len; i++) {
    newstr += finalArro
  }
  return newstr
}

console.log(calculateArrowhead([">", ">>>>>", ">>>>", ">>>>>>>", ">>>>>>>>", ">>>>", ">>>>>>>>"]))