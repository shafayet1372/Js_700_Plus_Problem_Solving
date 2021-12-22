/* One, Two, Skip a Few
Create a function which calculates how many numbers are missing from an ordered number line. This number line starts at the first value 
of the array, and increases by 1 to the end of the number line, ending at the last value of the array.

howManyMissing([1, 2, 3, 8, 9]) ➞ 4

// The number line starts at 1 and ends at 9 (so the numbers 0 and 10 aren't missing from it).
// The numbers missing from this line are 4, 5, 6, and 7.
// 4 numbers are missing.
Examples
howManyMissing([1, 3]) ➞ 1

howManyMissing([7, 10, 11, 12]) ➞ 2

howManyMissing([1, 3, 5, 7, 9, 11]) ➞ 5

howManyMissing([5, 6, 7, 8]) ➞ 0
Notes
If the number line is complete, or the array is empty, return 0. */


function howManyMissing(arr) {
  let counter = 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      counter += (arr[i + 1] - arr[i]) - 1
    }
  }
  return counter
}

console.log(howManyMissing([1, 2, 3, 8, 9]))