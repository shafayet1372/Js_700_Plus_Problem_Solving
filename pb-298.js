/* Hall Monitor 2
A floor plan is arranged as follows:

You may freely move between rooms 1 and 2.
You may freely move between rooms 3 and 4.
However, you can enter the hallway to move between rooms 2 and 4.
Floor Plan

Create a function that validates whether the route taken between rooms is possible. The hallway will be given as the letter "H".

Examples
possiblePath([1, 2, "H", 4, 3]) ➞ true

possiblePath(["H", 1, 2]) ➞ false

possiblePath([4, 3, 4, "H", 4, "H"]) ➞ true
Notes
A route may begin or end in any room (including the hallway).
All inputs are either numbers 1-4 or the letter "H".
No rooms will repeat. */






function possiblePath(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (i == 0 && arr[i] == "H") {

      return false
    } else if ((arr[i] == '1' && arr[i + 1] != '2')) {

      return false
    } else if ((arr[i] == '3' && arr[i + 1] != '4')) {

      return false
    } else if (arr[i] == 'H' && (arr[i + 1] != '2' && arr[i + 1] != '4')) {

      return false
    } else if ((arr[i] == "2" || arr[i == '4']) && arr[i + 1] != "H" && arr[i - 1] != '1' && arr[i - 1] != "3") {
      return false
    }
  }
  return true
}

console.log(possiblePath(["H"]))