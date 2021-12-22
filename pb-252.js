/* Highest Pair
You will be given a collection of five cards (representing a player's hand in poker). If your hand contains at least one pair, return an array 
of two elements: true and the card number of the highest pair (trivial if there only exists a single pair). Else, return false.

Examples
highestPair(["A", "A", "Q", "Q", "6" ]) ➞ [true, "A"]

highestPair(["J", "6", "3", "10", "8"]) ➞ false

highestPair(["K", "7", "3", "9", "3"]) ➞ [true, "3"]

highestPair(["K", "9", "10", "J", "Q"]) ➞ false

highestPair(["3", "5", "5", "5", "5"]) ➞ [true, "5"]
Notes
Hands with three or more of the same card still count as containing a pair (see the last example). */



function highestPair(cards) {
  let visited = []
  let pairs = cards.filter(val => {
    let counter = 0
    if (visited.indexOf(val) == -1) {
      cards.forEach(val1 => {
        if (val === val1) {
          counter++
        }
      })
      visited.push(val)
    }
    return counter >= 2
  }).sort((a, b) => isNaN(parseInt(a)) ? a.charCodeAt(0) - b.charCodeAt(0) : parseInt(b) - parseInt(a))

  if (pairs.length > 0) {
    return [true, pairs[0]]
  }
  return false
}

console.log(highestPair(['A', '3', '3', '4', '4']))