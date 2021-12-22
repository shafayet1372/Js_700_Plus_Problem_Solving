/* Tile Teamwork Tactics
In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the 
same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that returns if it's possible to earn a bonus when you roll the dice.

Examples
possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false
Notes
You cannot move backward (which is why example #3 doesn't work).
If you are already on the same tile, return false, as you would be advancing away.
Expect only positive integer inputs. */




function possibleBonus(a, b) {

  if (a > b) {
    return false
  } else if (a == b) {
    return false
  } else if ((a + 6) >= b) {
    return true
  } else {
    return false
  }
}

console.log(possibleBonus(1, 9))