/* Sort By Index of Character
Write a function that sorts an array of characters alphabetically in ascending order (a-z) by the character at the n-th character.

Examples
sortByCharacter(["az16", "by35", "cx24"], 2) ➞ ["cx24", "by35", "az16"]
// By 2nd character: ["x", "y", "z"] is in alphabetical order.

sortByCharacter(["mayor", "apple", "petal"], 5) ➞ ["apple", "petal", "mayor"]
// By 5th character: ["e", "l", "r"] is in alphabetical order.

sortByCharacter(["mate", "team", "bade"], 3) ➞ ["team", "bade", "mate"]
Notes
All inputs will be of same length. */


function sortByCharacter(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].charCodeAt(n - 1) > arr[j].charCodeAt(n - 1)) {
        let swap = arr[i]
        arr[i] = arr[j]
        arr[j] = swap
      }
    }
  }
  return arr
}

console.log(sortByCharacter(["az16", "by35", "cx24"], 2))