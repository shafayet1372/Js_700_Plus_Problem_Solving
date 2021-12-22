/* Moving to the End
Write a function that moves all elements of one type to the end of the array.

Examples
moveToEnd([1, 3, 2, 4, 4, 1], 1) ➞ [3, 2, 4, 4, 1, 1]
// Move all the 1s to the end of the array.

moveToEnd([7, 8, 9, 1, 2, 3, 4], 9) ➞ [7, 8, 1, 2, 3, 4, 9]

moveToEnd(["a", "a", "a", "b"], "a") ➞ ["b", "a", "a", "a"]
Notes
Keep the order of the un-moved items the sam */

function moveToEnd(arr, el) {
  let newar = [], counter = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != el) {
      newar.push(arr[i])
    } else {
      counter++
    }
  }
  for (let j = 0; j < counter; j++) {
    newar.push(el)
  }
  return newar
}

console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1))